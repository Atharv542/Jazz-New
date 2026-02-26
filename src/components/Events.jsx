import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { workshops } from "../data/workshops";

export default function Events() {
  const navigate = useNavigate();

  const stats = useMemo(() => {
    const totalEvents = workshops.length;

    const totalVideos = workshops.reduce(
      (acc, w) => acc + (w.videos?.length || 0),
      0
    );

    const latest = workshops[0];
    return { totalEvents, totalVideos, latest };
  }, []);

  const featured = workshops[1];

  const showPlaceholders = workshops.length < 3;
  const placeholderCount = Math.max(0, 3 - workshops.length);

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-sm">

          {featured?.coverImage && (
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
          )}

          <div className="relative p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-wider text-white/80">
              WORKSHOPS
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Highlights from Our Events
            </h1>

            <p className="mt-3 max-w-2xl text-white/80">
              Explore memories, smiles, and healing journeys captured during our sessions.
            </p>

            <div className="mt-6 flex gap-3">
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {stats.totalEvents} Events
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                {stats.totalVideos} Videos
              </div>
            </div>

            {featured && (
              <button
                onClick={() => navigate(`/events/${featured.id}`)}
                className="mt-8 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-white/90"
              >
                View latest workshop
              </button>
            )}
          </div>
        </div>

        {/* ALL EVENTS GRID */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">All Events</h2>

          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {workshops.map((w) => {
              const videoCount = w.videos?.length || 0;

              return (
                <button
                  key={w.id}
                  onClick={() => navigate(`/events/${w.id}`)}
                  className="group overflow-hidden border-2 border-amber-500 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:-translate-y-0.5 transition"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={w.coverImage}
                      alt={w.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-5 text-left">
                    <h3 className="font-bold">{w.title}</h3>

                    <p className="mt-1 text-sm text-slate-600">
                      {w.date} • {w.location}
                    </p>

                    <div className="mt-4 text-sm font-semibold">
                      {videoCount > 0
                        ? `${videoCount} videos →`
                        : "Photo gallery →"}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* PLACEHOLDERS */}
            {showPlaceholders &&
              Array.from({ length: placeholderCount }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                >
                  <div className="aspect-video bg-slate-100 flex items-center justify-center">
                    <span className="bg-slate-200 px-4 py-2 rounded-full text-sm">
                      Coming Soon
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="h-4 w-2/3 bg-slate-100 rounded" />
                    <div className="mt-3 h-3 w-1/2 bg-slate-100 rounded" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}