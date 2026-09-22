import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PHONE, WHATSAPP, departmentOptions, doctorOptions, timeOptions, facilities } from '../data/content';

const initialForm = { name: '', phone: '', department: 'fertility', doctor: 'chaitanya', date: '', time: 'morning' };

export function Enquiry() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const departmentLabel = departmentOptions.find((o) => o.value === form.department)?.key;
    const doctorLabel = doctorOptions.find((o) => o.value === form.doctor)?.key;
    const timeLabel = timeOptions.find((o) => o.value === form.time)?.key;

    const lines = [
      '*OPD Appointment Request*',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Department: ${t(departmentLabel)}`,
      `Doctor: ${t(doctorLabel)}`,
      form.date && `Date: ${form.date}`,
      `Time: ${t(timeLabel)}`,
    ].filter(Boolean);

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="w-full py-space-xl bg-surface scroll-mt-[112px]" id="quick-enquiry">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-space-lg shadow-xl">
            <div className="flex items-center justify-between pb-space-sm">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">{t('enquiry.label')}</span>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">{t('enquiry.heading')}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined">edit_calendar</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pb-space-md">{t('enquiry.description')}</p>

            <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.name')}</label>
                <input
                  className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
                  placeholder={t('form.namePlaceholder')}
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.phone')}</label>
                <input
                  className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
                  placeholder={t('form.phonePlaceholder')}
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div>
                  <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.department')}</label>
                  <select
                    className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
                    value={form.department}
                    onChange={update('department')}
                  >
                    {departmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.key)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.doctor')}</label>
                  <select
                    className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
                    value={form.doctor}
                    onChange={update('doctor')}
                  >
                    {doctorOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.key)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div>
                  <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.date')}</label>
                  <input
                    className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none"
                    type="date"
                    value={form.date}
                    onChange={update('date')}
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-primary font-semibold mb-1">{t('form.time')}</label>
                  <select
                    className="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-body-md text-on-surface focus:outline-none"
                    value={form.time}
                    onChange={update('time')}
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.key)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-space-xs bg-secondary text-on-secondary py-3.5 px-6 rounded-xl font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary-container transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">send</span>
                {t('form.submit')}
              </button>
              <span className="font-caption text-caption text-center text-on-surface-variant">{t('form.note')}</span>
            </form>

            {submitted && (
              <div className="mt-space-md p-space-md bg-surface-container-high rounded-xl text-primary font-body-md text-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span>{t('form.confirmation')}</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col gap-space-md scroll-mt-[112px]" id="facilities">
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('facilities.label')}</span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">{t('facilities.heading')}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t('facilities.description')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {facilities.map((facility) => (
                <div key={facility.id} className="bg-surface-container-low p-space-md rounded-2xl flex items-start gap-space-md shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${facility.iconBg}`}>
                    <span className="material-symbols-outlined">{facility.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-bold">{t(facility.titleKey)}</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{t(facility.descKey)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-on-primary rounded-2xl p-space-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold">{t('facility.cta.title')}</span>
                <span className="font-body-md text-body-md text-surface-container-high/90">{t('facility.cta.desc')}</span>
              </div>
              <a
                className="bg-secondary-fixed text-on-secondary-fixed px-5 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-secondary-fixed-dim transition-all flex items-center gap-2 whitespace-nowrap shadow"
                href={`tel:${PHONE}`}
              >
                <span className="material-symbols-outlined">call</span>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
