import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { workshops } from "../data/workshops";

export default function EventGallery() {
  const { id } = useParams();
  const [activeMedia, setActiveMedia] = useState(null);
  const [mediaType, setMediaType] = useState("video");

  const workshop = useMemo(() => workshops.find((w) => w.id === id), [id]);

  if (!workshop) return null;

  return (
    <div className="min-h-screen bg-slate-50 p-15">
      <div className="mx-auto max-w-6xl px-4 py-10">

        <Link to="/events" className="rounded-xl bg-white px-4 py-2 shadow ring-1 ring-slate-200">
          ← Back to Events
        </Link>

        <h1 className="mt-6 text-2xl font-bold">{workshop.title}</h1>
        <p className="text-slate-600">{workshop.date} • {workshop.location}</p>

        {/* VIDEOS */}
        {workshop.videos?.length > 0 && (
          <>
            <h2 className="mt-8 mb-3 font-bold text-lg">Videos</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshop.videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setActiveMedia(v.url);
                    setMediaType("video");
                  }}
                  className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-slate-200"
                >
                  <video
                    src={v.url}
                    muted
                    loop
                    
                    className="w-full aspect-video object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* PHOTOS */}
        {workshop.photos?.length > 0 && (
          <>
            <h2 className="mt-10 mb-3 font-bold text-lg">Photos</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workshop.photos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveMedia(p.url);
                    setMediaType("photo");
                  }}
                  className="overflow-hidden rounded-xl bg-white shadow ring-1 ring-slate-200"
                >
                  <img
                    src={p.url}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* MODAL */}
        {activeMedia && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="max-w-3xl w-full p-4">

              <button onClick={() => setActiveMedia(null)} className="text-white mb-2">
                Close
              </button>

              {mediaType === "video" ? (
                <video src={activeMedia} controls autoPlay className="w-full rounded-xl" />
              ) : (
                <img src={activeMedia} className="w-full rounded-xl" />
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}