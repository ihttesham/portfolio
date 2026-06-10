/**
 * Live project links by category.
 * Format: { title: "Site Name", url: "https://example.com" }
 */
const PROJECT_LINKS = {
  business: [
    { title: "Memaar", url: "https://memaar.pk/" },
    { title: "Memaar Incubation Center", url: "https://micpk.com/" },
    { title: "Digital Aspire", url: "https://digitalaspire.net/" },
    { title: "The Adverty", url: "https://theadverty.com/" },
    { title: "Asian Gold Commodities", url: "https://asiangoldcommodities.com/" },
    { title: "AGC Trading School", url: "https://agctradingschool.com/" },
    { title: "Memaar Group", url: "https://memaargroup.com/" },
    { title: "Sapiens", url: "https://sapiens.pk/" },
    { title: "Ahsan Kazmi", url: "https://ahsankazmi.com/" },
    { title: "Al Asar", url: "https://alasar.org.pk/" },
    { title: "Brightline Media", url: "https://brightlinemedia.pk/" },
    { title: "Limousine", url: "https://limousine.no/" },
    { title: "Griffin Tax Professionals", url: "https://griffintaxprofessionals.com.au/" },
    { title: "Waed Properties", url: "https://waedproperties.com/" },
    { title: "Dallas Shoulder", url: "https://dallasshoulder.com/" },
    { title: "Ihsan Movers", url: "https://ihsanmovers.com/" },
    { title: "Windows With Nova", url: "https://windowswithnova.com/" },
    { title: "Precision Glass & Shower", url: "https://precisionglassandshower.com/" },
    { title: "Window Gurus", url: "https://window-gurus.com/" },
    { title: "Texas CIP", url: "https://texascip.com/" },
    { title: "Metro Protection Atlanta", url: "https://www.metroprotectionatl.com/" },
    { title: "AutoFix DXB", url: "https://autofixdxb.com/" },
    { title: "Hackensack CMIGS", url: "https://www.hackensackcmigs.com/" },
    { title: "Future Home Cleanings", url: "https://futurehomecleanings.com/" },
    { title: "Sports Cars Recovery Al Ain", url: "https://sportscarsrecoveryinalain.com/" },
    { title: "Bin Hattab General Transportation", url: "https://binhattabgeneraltransportationllc.com/" },
    { title: "AG Telecoms", url: "https://agtelecoms.co.uk/" },
    { title: "Markooz Media", url: "https://markoozmedia.com/" },
    { title: "Blixt Marketing", url: "https://blixtmarketing.com/" },
    { title: "Memaar Ads", url: "https://ads.memaar.pk/" },
    { title: "Memaar Bookings", url: "https://bookings.memaar.pk/" },
    { title: "The Adverty (New)", url: "https://new.theadverty.com/" },
    { title: "NextAI Digital", url: "https://nextaidigital.com/" },
    { title: "SEE Organization", url: "https://seeorganization.com/" },
    { title: "Next Skills", url: "https://nextskills.pk/" },
  ],
  ecommerce: [
    { title: "Daigo", url: "https://daigo.pk/" },
    { title: "Organic By Natures", url: "https://organicbynatures.com/" },
    { title: "Yardlie", url: "https://yardlie.com/" },
    { title: "Adeena Perfume", url: "https://adeenaperfume.com/" },
    { title: "Card Games 4 Educators", url: "https://cardgames4educators.com/" },
    { title: "Amazing Herbs", url: "https://amazingherbs.com/" },
    { title: "Scenticious", url: "https://scenticious.shop/" },
    { title: "AE Studio Store", url: "https://aestudio.store/" },
    { title: "Beroma Shop", url: "https://beroma.shop/" },
    { title: "MTT Store", url: "https://mttstore.pk/" },
    { title: "Wataani", url: "https://wataani.com/" },
  ],
  lms: [
    { title: "MIC Learning Portal", url: "https://micpk.com/portal/?fcom_action=auth" },
    { title: "Wali Shah Learning", url: "https://learn.walishah.com/" },
  ],
  landing: [
    { title: "Memaar — Shops & Offices Peshawar", url: "https://ads.memaar.pk/shops-offices-for-sale-peshawar/" },
    { title: "Memaar — Qasr e Memaar Residential", url: "https://ads.memaar.pk/qasr-e-memaar-residential-properties/" },
    { title: "Memaar — Commercial Shops Qasr e Memaar", url: "https://ads.memaar.pk/commercial-shops-qasr-e-memaar-peshawar/" },
    { title: "5 Star Used Furniture Buyers", url: "https://5starusedfurniturebuyers.com/" },
    { title: "Illinois Property Tax Savings", url: "https://illinoistotntaxsavings.online/" },
    { title: "MR Interior", url: "https://mrinterior.ae/" },
    { title: "Residential Cleaning Services", url: "https://residentialcleaningservices.thecleaningninjas.com/" },
    { title: "Highlands Ranch Carpet", url: "https://highlandsranch.coloradochoicecarpet.com/" },
    { title: "Denver Metro Carpet Offer", url: "https://denvermetrooffer.coloradochoicecarpet.com/" },
    { title: "Cleaning Pro", url: "https://cleaning-pro.online/" },
    { title: "Ghazi Used Furniture Buyers", url: "https://ghaziusedfurniturebuyers.com/" },
    { title: "Cash 4 Furniture Dubai", url: "https://cash4furnituredubai.com/" },
    { title: "Used Furniture Buyers Dubai", url: "https://usedfurniturebuyersdubai.ae/" },
    { title: "Deserts Safari Booking", url: "https://desertssafaribooking.com/" },
  ],
};

function normalizeUrl(url) {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url.replace(/^\/\//, "")}`;
  }
  return url;
}

function displayUrl(url) {
  return normalizeUrl(url).replace(/^https?:\/\//, "");
}

function renderProjectLinks() {
  Object.entries(PROJECT_LINKS).forEach(([category, links]) => {
    const grid = document.querySelector(`[data-category="${category}"]`);
    if (!grid || !links.length) return;

    grid.innerHTML = links
      .map(({ title, url }) => {
        const href = normalizeUrl(url);
        return `
      <a href="${href}" target="_blank" rel="noopener" class="project-link-card">
        <span class="link-title">${title}</span>
        <span class="link-url">${displayUrl(url)}</span>
        <span class="link-action">Visit Live Website →</span>
      </a>
    `;
      })
      .join("");
  });

  const countMap = {
    business: "data-business-count",
    ecommerce: "data-ecommerce-count",
    lms: "data-lms-count",
    landing: "data-landing-count",
  };

  Object.entries(countMap).forEach(([category, attr]) => {
    const count = PROJECT_LINKS[category].length;
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      el.textContent = `${count} Live Sites`;
    });
  });
}

document.addEventListener("DOMContentLoaded", renderProjectLinks);
