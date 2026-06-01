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
  {
    id: 2,
    title: "",
    description: "",
    category: "",
    image: "/images/recent_project3.jpg",
    completedAt: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    category: "",
    image: "/images/recent_project4.jpg",
    completedAt: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    category: "",
    image: "/images/recent_project5.jpg",
    completedAt: "",
  },
  {
    id: 5,
    title: "",
    description: "",
    category: "",
    image: "/images/recent_project7.jpg",
    completedAt: "",
  },
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
