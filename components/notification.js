const body = document.querySelector("#notification");

export const createNotification = (isError, message) => {
  const div = document.createElement("div");

if (isError) {
    div.innerHTML = `
      <div class="max-w-7xl mx-auto px-6 flex justify-end">
        <div class="bg-red-50 text-red-950 border border-red-200 p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm w-full transition-all duration-300">
          <span class="text-xl text-red-500 shrink-0">⚠️</span>
          <div class="flex flex-col">
            <span class="text-xs font-bold uppercase tracking-wider text-red-500">Error</span>
            <p class="text-sm font-medium mt-0.5 leading-relaxed">${message}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="max-w-7xl mx-auto px-6 flex justify-end">
        <div class="bg-emerald-50 text-emerald-950 border border-emerald-200 p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm w-full transition-all duration-300">
          <span class="text-xl text-emerald-500 shrink-0">✅</span>
          <div class="flex flex-col">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-500">Éxito</span>
            <p class="text-sm font-medium mt-0.5 leading-relaxed">${message}</p>
          </div>
        </div>
      </div>
    `;
  }

  body.append(div)
};
