import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

const mockServices = [
  // =========================
  // MOTORCYCLES
  // =========================
  {
    id: 1,
    title: "Full Motorcycle Tune-Up",
    description: "Complete inspection, fluid change, spark plugs, air filter, and chain adjustment. Get your bike ready for the season.",
    category: "motorcycle",
    // price: "$150",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Carburetor Cleaning & Rebuild",
    description: "Expert carburetor service to fix starting issues, rough idling, and poor performance.",
    category: "motorcycle",
    // price: "$120",
    image: "/images/carburetor.jpg",
  },
  {
    id: 3,
    title: "Tire Replacement & Balancing",
    description: "Professional tire mounting and balancing for all types of motorcycles.",
    category: "motorcycle",
    // price: "$80",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "Custom Modifications",
    description:
      "Handlebar installs, exhaust upgrades, lighting, and aesthetic modifications.",
    category: "motorcycle",
    // price: "$200",
    image:
      "/images/recent_project3.jpg",
  },
  {
    id: "5",
    title: "Diagnostics",
    description:
      "Advanced electrical and mechanical diagnostics to identify hard-to-find issues.",
    category: "motorcycle",
    // price: "$90",
    image:
      "https://images.unsplash.com/photo-1626848206412-25e172a8c386?auto=format&fit=crop&q=80&w=800",
  },
  // =========================
  // SMALL ENGINE
  // =========================
  {
    id: "6",
    title: "Small Engine Repair",
    description:
      "Service for lawn mowers, generators, snow blowers, and other small equipment.",
    category: "small-engine",
    // price: "$100",
    image:
      "https://images.unsplash.com/photo-1590634213602-230b5e297837?auto=format&fit=crop&q=80&w=800",
  },
  // =========================
  // ATV
  // =========================
  {
    id: "7",
    title: "ATV Service & Inspection",
    description:
      "Complete ATV service including fluids, air filter, spark plug check, and drivetrain inspection.",
    category: "atv",
    // price: "$140",
    image: "/images/atv-service.jpg",
  },
  // {
  //   id: "8",
  //   title: "ATV Carburetor Cleaning",
  //   description:
  //     "Fix hard starting, bogging, and idle issues with full carb cleaning and jet inspection.",
  //   category: "atv",
  //   // price: "$130",
  //   image: "/images/atv-carb.jpg",
  // },
  // {
  //   id: "9",
  //   title: "ATV Suspension & Shock Service",
  //   description:
  //     "Shock inspection, replacement, and suspension tuning for off-road performance.",
  //   category: "atv",
  //   // price: "$160",
  //   image: "/images/atv-suspension.jpg",
  // },

  // =========================
  // UTV / SIDE-BY-SIDE
  // =========================
  {
    id: "10",
    title: "UTV / Side-by-side Service & Inspection",
    description:
      "Comprehensive maintenance for side-by-sides including fluids, filters, belts, and drivetrain inspection.",
    category: "utv",
    // price: "$180",
    image: "/images/utv-service.jpg",
  },
  // {
  //   id: "11",
  //   title: "UTV Belt & Drivetrain Repair",
  //   description:
  //     "CVT belt replacement, clutch inspection, and drivetrain diagnostics for UTVs.",
  //   category: "utv",
  //   // price: "$220",
  //   image: "/images/utv-belt.jpg",
  // },
  // {
  //   id: "12",
  //   title: "UTV Lift Kit & Upgrade Installation",
  //   description:
  //     "Install lift kits, wheels, tires, and performance accessories for off-road builds.",
  //   category: "utv",
  //   // price: "$300+",
  //   image: "/images/utv-lift.jpg",
  // },
];

// export async function GET() {
//   // Phase 0: return mock data, no database needed
//   return NextResponse.json(mockServices);
// }

// export async function POST(request: Request) {
//   const body = await request.json();
//   // Phase 0: simulate inserting service
//   const newService = { ...body, id: Math.floor(Math.random() * 1000) };
//   return NextResponse.json(newService);
// }

// =========================
// GET /api/services?category=atv
// =========================
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category) {
    const filtered = mockServices.filter(
      (service) => service.category === category
    );

    return NextResponse.json(filtered);
  }

  return NextResponse.json(mockServices);
}

// =========================
// POST (mock insert)
// =========================
export async function POST(request: Request) {
  const body = await request.json();

  const newService = {
    id: randomUUID(),
    ...body,
  };

  return NextResponse.json(newService);
}
