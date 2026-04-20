'use client';

import { CalendarDays, GraduationCap, ShieldCheck, Users } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-[#012140]/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#d61c1c]/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-12 h-44 w-44 rounded-full bg-[#012140]/10 blur-2xl" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#012140]/70">
            Admin Dashboard
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[#012140] sm:text-3xl">
            Welcome back, Admin
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Your secure PTU admin workspace is active. Alumni and event analytics can be plugged in once summary APIs are added.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-[#012140]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="mb-3 inline-flex rounded-xl bg-[#012140]/10 p-2 text-[#012140]">
            <ShieldCheck size={18} />
          </div>
          <p className="text-sm font-medium text-slate-500">Session Status</p>
          <p className="mt-1 text-xl font-bold text-[#012140]">Authenticated</p>
        </div>

        <div className="rounded-2xl border border-[#d61c1c]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="mb-3 inline-flex rounded-xl bg-[#d61c1c]/10 p-2 text-[#d61c1c]">
            <Users size={18} />
          </div>
          <p className="text-sm font-medium text-slate-500">Alumni Module</p>
          <p className="mt-1 text-xl font-bold text-[#012140]">Ready for Integration</p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="mb-3 inline-flex rounded-xl bg-emerald-100 p-2 text-emerald-600">
            <CalendarDays size={18} />
          </div>
          <p className="text-sm font-medium text-slate-500">Events Module</p>
          <p className="mt-1 text-xl font-bold text-[#012140]">Ready for Integration</p>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="mb-3 inline-flex rounded-xl bg-sky-100 p-2 text-sky-600">
            <GraduationCap size={18} />
          </div>
          <p className="text-sm font-medium text-slate-500">University Theme</p>
          <p className="mt-1 text-xl font-bold text-[#012140]">PTU Brand Applied</p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#012140]/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#012140]">Default Dashboard Notes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Authentication is active with access/refresh token cookie flow.</li>
          <li>Unauthorized users are redirected to the admin login route.</li>
          <li>This screen intentionally avoids calling unimplemented summary APIs.</li>
        </ul>
      </section>
    </div>
  );
}