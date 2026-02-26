import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { services } from "@/shared/schema";

// async function seedDatabase() {
//   const existing = await db.select().from(services);
//   if (existing.length === 0) {
//     const seedData = [
//       {
//         title: "Full Motorcycle Tune-Up",
//         description: "Complete inspection, fluid change, spark plugs, air filter, and chain adjustment. Get your bike ready for the season.",
//         category: "motorcycle",
//         image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
//       },
//       {
//         title: "Carburetor Cleaning & Rebuild",
//         description: "Expert carburetor service to fix starting issues, rough idling, and poor performance.",
//         category: "motorcycle",
//         image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
//       },
//       {
//         title: "Tire Replacement & Balancing",
//         description: "Professional tire mounting and balancing for all types of motorcycles.",
//         category: "motorcycle",
//         image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800",
//       },
//       {
//         title: "Small Engine Repair",
//         description: "Service for lawn mowers, generators, snow blowers, and other small equipment.",
//         category: "small-engine",
//         image: "https://images.unsplash.com/photo-1590634213602-230b5e297837?auto=format&fit=crop&q=80&w=800",
//       },
//       {
//         title: "Custom Modifications",
//         description: "Handlebar installs, exhaust upgrades, lighting, and aesthetic modifications.",
//         category: "motorcycle",
//         image: "https://images.unsplash.com/photo-1591462393397-c80387405238?auto=format&fit=crop&q=80&w=800",
//       },
//       {
//         title: "Diagnostics",
//         description: "Advanced electrical and mechanical diagnostics to identify hard-to-find issues.",
//         category: "motorcycle",
//         image: "https://images.unsplash.com/photo-1626848206412-25e172a8c386?auto=format&fit=crop&q=80&w=800",
//       },
//     ];

//     for (const service of seedData) {
//       await db.insert(services).values(service);
//     }
//   }
// }

// let seeded = false;

// export async function GET() {
//   if (!seeded) {
//     await seedDatabase();
//     seeded = true;
//   }
//   const allServices = await db.select().from(services);
//   return NextResponse.json(allServices);
// }



// Phase 0: mock service data
const mockServices = [
  {
    id: 1,
    title: "Full Motorcycle Tune-Up",
    description: "Complete inspection, fluid change, spark plugs, air filter, and chain adjustment. Get your bike ready for the season.",
    category: "motorcycle",
    price: "$150",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Carburetor Cleaning & Rebuild",
    description: "Expert carburetor service to fix starting issues, rough idling, and poor performance.",
    category: "motorcycle",
    price: "$120",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Tire Replacement & Balancing",
    description: "Professional tire mounting and balancing for all types of motorcycles.",
    category: "motorcycle",
    price: "$80",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Small Engine Repair",
    description: "Service for lawn mowers, generators, snow blowers, and other small equipment.",
    category: "small-engine",
    price: "$100",
    image: "https://images.unsplash.com/photo-1590634213602-230b5e297837?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Custom Modifications",
    description: "Handlebar installs, exhaust upgrades, lighting, and aesthetic modifications.",
    category: "motorcycle",
    price: "$200",
    image: "https://images.unsplash.com/photo-1591462393397-c80387405238?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Diagnostics",
    description: "Advanced electrical and mechanical diagnostics to identify hard-to-find issues.",
    category: "motorcycle",
    price: "$90",
    image: "https://images.unsplash.com/photo-1626848206412-25e172a8c386?auto=format&fit=crop&q=80&w=800",
  },
];

export async function GET() {
  // Phase 0: return mock data, no database needed
  return NextResponse.json(mockServices);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Phase 0: simulate inserting service
  const newService = { ...body, id: Math.floor(Math.random() * 1000) };
  return NextResponse.json(newService);
}

/* 
Phase 1 real DB code (for reference):

let seeded = false;

async function seedDatabase() {
  const existing = await db.select().from(servicesSchema);
  if (existing.length === 0) {
    const seedData = [ ... ];
    for (const service of seedData) {
      await db.insert(servicesSchema).values(service);
    }
  }
}

export async function GET() {
  if (!seeded) {
    await seedDatabase();
    seeded = true;
  }
  const allServices = await db.select().from(servicesSchema);
  return NextResponse.json(allServices);
}
*/