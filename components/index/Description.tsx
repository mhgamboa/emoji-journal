import React from "react";

function jumptron() {
  return (
    <div className="bg-slate-100 justify-center items-center w-full flex flex-col p-10">
      <div className="mb-10 flex items-center gap-x-4 sm:gap-x-8 xl:gap-x-12">
        <div className="index-emoji">✍️</div>
        <div className="index-arrow-emoji">➡</div>
        <div className="index-emoji">📖</div>
        <div className="index-arrow-emoji">➡</div>
        <div className="index-emoji">😁</div>
      </div>

      <div className="mb-10 sm:mb-20 max-w-lg">
        <div className="font-semibold index-heading mb-3">What is The Emoji Journal?</div>
        <div className="index-body">
          Honestly, It’s pretty much a normal journal, but you can summarize the daily entry with
          an emoji.
        </div>
      </div>
      <div className="mb-10 max-w-lg">
        <div className="font-semibold index-heading mb-3">Why Use The Emoji Journal?</div>
        <div className="index-body">
          You Probably shouldn’t. There are more robust web apps you can use, and this one is
          still being developed tbh.
        </div>
      </div>
    </div>
  );
}

export default jumptron;
