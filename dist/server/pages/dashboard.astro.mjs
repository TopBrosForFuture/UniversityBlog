import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dm1lobmq.mjs';
import { $ as $$Layout } from '../chunks/Layout_k1M6EtkV.mjs';
import { g as getUserFromRequest } from '../chunks/session_DmsVjKaO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = getUserFromRequest(Astro2.request);
  if (!user) {
    return Astro2.redirect("/login");
  }
  if (user.role === "User") {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel Administrativo - Mi App" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50"> <!-- Header --> <header class="bg-white shadow"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-6"> <h1 class="text-3xl font-bold text-gray-900">Panel Administrativo</h1> <div class="flex items-center space-x-4"> <span class="text-sm text-gray-700">Bienvenido, ${user.nombre}</span> <form action="/api/auth/logout" method="POST" class="inline"> <button type="submit" class="text-sm text-red-600 hover:text-red-500">
Cerrar Sesión
</button> </form> </div> </div> </div> </header> <!-- Content --> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> <div class="px-4 py-6 sm:px-0"> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <!-- Stats Cards --> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="p-5"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">Total Noticias</dt> <dd class="text-lg font-medium text-gray-900">2</dd> </dl> </div> </div> </div> </div> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="p-5"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">Actividad</dt> <dd class="text-lg font-medium text-gray-900">Alta</dd> </dl> </div> </div> </div> </div> </div> <!-- Quick Actions --> <div class="mt-8"> <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Acciones Rápidas</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> <a href="/dashboard/news" class="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors">
Gestionar Noticias
</a> <a href="/admin/settings" class="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors">
Configuración
</a> <a href="/admin/reports" class="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg text-center transition-colors">
Reportes
</a> </div> </div> </div> </main> </div> ` })}`;
}, "/Users/rodrigoesprella/Documents/FNI/UniversityBlog/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/rodrigoesprella/Documents/FNI/UniversityBlog/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
