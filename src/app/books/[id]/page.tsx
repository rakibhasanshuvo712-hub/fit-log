import Image from "next/image";
import { Workout } from "@/app/types/workout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const data = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const workouts: Workout[] = await data.json();
    return workouts.find((workout) => workout.id === Number(id)) || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function WorkoutDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="relative">
            <Image
              src={workout.image}
              alt={workout.name}
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-[500px]"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold uppercase tracking-wide">
              {workout.name}
            </h1>

            <div className="flex gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="px-4 py-1 rounded-full text-sm font-bold uppercase bg-lime-400 text-black"
                >
                  {muscle}
                </span>
              ))}
              <span className="px-4 py-1 rounded-full text-sm font-bold uppercase bg-[#1a1d24] text-gray-400">
                {workout.equipment}
              </span>
            </div>

            <p className="text-gray-400 text-lg">
              {workout.description}
            </p>

            <div className="grid grid-cols-2 gap-4 bg-[#1a1d24] rounded-xl p-6">
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Equipment</p>
                <p className="font-semibold">{workout.equipment}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Difficulty</p>
                <p className="font-semibold">{workout.difficulty}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Sets</p>
                <p className="font-semibold">{workout.sets}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Reps</p>
                <p className="font-semibold">{workout.reps}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Duration</p>
                <p className="font-semibold">{workout.duration} min</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Calories</p>
                <p className="font-semibold">{workout.caloriesBurned} kcal</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm uppercase">Rating</p>
                <p className="font-semibold">{workout.rating} / 5</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 uppercase">Instructions</h2>
              <ol className="space-y-2 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">1.</span>
                  <span>Lie on the bench with eyes under the bar and feet planted.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">2.</span>
                  <span>Unrack with locked elbows and lower the bar to mid-chest.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">3.</span>
                  <span>Press up in a slight arc until elbows lock without bouncing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400 font-bold">4.</span>
                  <span>Keep shoulder blades pinched and a natural arch in the back.</span>
                </li>
              </ol>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-lime-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-500 transition">
                Add to today's plan
              </button>
              <button className="flex-1 bg-[#1a1d24] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#252930] transition border border-gray-700">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}