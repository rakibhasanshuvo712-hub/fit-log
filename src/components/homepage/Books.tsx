import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/app/types/workout";

export default async function Books() {
  const data = await fetch( "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts: Workout[] = await data.json();

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="mb-2 text-3xl font-bold">
        Popular Workouts</h2>

         <p className="mb-8 text-gray-500">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
        <Link
            href={`/books/${workout.id}`}
            key={workout.id}
            className="overflow-hidden rounded-xl bg-[#1a1d24] shadow-md transition hover:-translate-y-1 hover:shadow-xl" >
            <Image
              src={workout.image}
              alt={workout.name}
              width={500}
              height={300}
              className="h-52 w-full object-cover"/>

            <div className="p-5 text-white">

              <div className="mb-3 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black">
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-wide">
                {workout.name}
        </h3>

              <p className="mt-1 line-clamp-2 text-sm text-gray-400">
                {workout.description}
              </p>

              <div className="mt-3 border-b border-dotted border-blue-500" />

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">

                <span className="flex items-center gap-2">
                  <span>◷</span>
                  {workout.duration} min
                </span>

                <span className="flex items-center gap-2">
                  <span>🔥</span>
                  {workout.caloriesBurned} kcal
                </span>

             <span className="flex items-center gap-2">
                  <span>☆</span>
                  {workout.rating}
                </span>

              </div>
            
               <button className="mt-5 rounded-lg bg-lime-400 px-4 py-2 text-center font-bold text-black">
                 View Details
               </button>
               

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}