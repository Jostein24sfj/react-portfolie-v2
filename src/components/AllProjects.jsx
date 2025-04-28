export default function AllProjects() {
  return (
    <div>
      <section className="text-white p-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 pb-8">All Projects</h1>

        <section className="flex flex-col flex-wrap md:flex-row items-center justify-between pt-2 gap-10">
          <section className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
            <img
              className="flex rounded-xl"
              src="/gymTracker.png"
              alt="bilde av en gym nettside"
            />
            <a
              className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://gym-tracker-sooty.vercel.app/">
              Gym Tracker
            </a>
            <p className="pt-4">
              En nettside hvor du kan se og følge opp treningen din.
            </p>
          </section>
          <section className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
            <img
              className="flex rounded-xl"
              src="/onScrollTestPage.png"
              alt="bilde av bil nettsiden"
            />
            <a
              className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwind-first-test-project.vercel.app/">
              Bmw e36 on scroll
            </a>
            <p className="pt-4">
              En nettside hvor lysene på bilen skrur seg på ved scroll.
            </p>
          </section>
          <section className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
            <img
              className="flex rounded-xl"
              src="/restaurantMenyen.png"
              alt="bilde av bil nettsiden"
            />
            <a
              className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwind-first-test-project.vercel.app/">
              Restaurantmenyen
            </a>
            <p className="pt-4">
              En nettside hvor du kan trykke for forskjellige knapper og få vist
              matretter deretter.
            </p>
          </section>
          <section className="flex flex-col w-96 md:w-86 h-74 rounded-xl p-6 bg-gradient-to-b from-black/40 to-zinc-800 from-85% hover:bg-zinc-800 border-zinc-400/20 border-2">
            <img
              className="flex rounded-xl"
              src="/RPGBoardgame.png"
              alt="bilde av bil nettsiden"
            />
            <a
              className="flex pt-1 font-medium text-2xl cursor-pointer hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://rpg-boardgame.vercel.app/">
              RPG Boardgame
            </a>
            <p className="pt-4">
              En nettside hvor lysene på bilen skrur seg på ved scroll.
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}
