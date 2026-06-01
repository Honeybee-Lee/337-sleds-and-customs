import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "2012 Harley-Davidson Street Glide – Custom Build",
    description: "Installed an air ride suspension system, sissy bar, and aftermarket exhaust. The air ride provides adjustable ride height and improved comfort, while the sissy bar adds passenger support. Finished with aftermarket pipes for a deeper exhaust note and a clean custom look.",
    category: "Custom Build",
    image: "/images/recent_project8.jpg",
    completedAt: "March 2025",
  },
//   {
//     title: "Honda CB750 – Café Racer Conversion",
//     description: "Classic CB750 stripped down and rebuilt into a clean café racer. New clip-on handlebars, rearset pegs, custom seat cowl, pod air filters, and a full engine rebuild.",
//     category: "Restoration",
//     image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=1200",
//     completedAt: "January 2024",
//   },
//   {
//     title: "Kawasaki Ninja 400 – Track Prep",
//     description: "Full track-day setup including brake line upgrade, quick-release bodywork, race-spec tire mounting, suspension adjustment, and ECU flash for optimal power delivery.",
//     category: "Performance",
//     image: "https://images.unsplash.com/photo-1591462393397-c80387405238?auto=format&fit=crop&q=80&w=1200",
//     completedAt: "November 2023",
//   },
//   {
//     title: "Vintage John Deere Tractor – Engine Overhaul",
//     description: "Complete small engine overhaul on a 1978 John Deere garden tractor. Rebuilt carburetor, replaced rings and gaskets, new ignition system, and full fuel system cleaning.",
//     category: "Small Engine",
//     image: "https://images.unsplash.com/photo-1590634213602-230b5e297837?auto=format&fit=crop&q=80&w=1200",
//     completedAt: "October 2023",
//   },
//   {
//     title: "Indian Scout – Custom Bobber Build",
//     description: "Stripped the Scout to its bones and built a minimalist bobber. Solo seat, hardtail fender, blacked-out engine components, drag bars, and custom exhaust wrap.",
//     category: "Custom Build",
//     image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200",
//     completedAt: "August 2023",
//   },
//   {
//     title: "Yamaha YZ250 – Race Season Rebuild",
//     description: "Pre-season full rebuild for a competitive motocross rider. Engine teardown, new piston and rings, fork seal replacement, chain and sprocket kit, and carburetor jetting.",
//     category: "Performance",
//     image: "https://images.unsplash.com/photo-1626848206412-25e172a8c386?auto=format&fit=crop&q=80&w=1200",
//     completedAt: "June 2023",
//   },
];

// let seeded = false;

// export async function GET() {
//   if (!seeded) {
//     const existing = await db.select().from(projects);
//     if (existing.length === 0) {
//       for (const project of seedProjects) {
//         await db.insert(projects).values(project);
//       }
//     }
//     seeded = true;
//   }
//   const allProjects = await db.select().from(projects);
//   return NextResponse.json(allProjects);
// }

export async function GET() {
  return NextResponse.json(projects);
}
