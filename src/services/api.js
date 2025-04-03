// src/services/api.js

const mockData = {
    name: "Dr. Ghulam Dastgir Khan",
    title: "Assistant Professor",
    biography: "Assistant Professor in the Graduate School of Humanities and Social Sciences, Hiroshima University. Research interests include natural resource management, social capital, agricultural development, and economics of institutions.",
    researchInterests: [
      "Natural Resource Management",
      "Social Capital",
      "Agricultural Economics",
      "Institutions and Development"
    ],
    publications: [
      {
        title: "Impact of Social Capital on Livelihood in Rural Afghanistan",
        journal: "Journal of Asian Economics",
        year: 2022,
        link: "https://example.com/publication1"
      },
      {
        title: "Community Forestry and Economic Development",
        journal: "Forest Policy and Economics",
        year: 2021,
        link: "https://example.com/publication2"
      }
    ],
    courses: ["Development Economics", "Policy Analysis", "Research Methods"],
    contact: {
      email: "gdkhan@hiroshima-u.ac.jp",
      website: "https://seeds.office.hiroshima-u.ac.jp/profile/en.eaa15d5ad3f26f88520e17560c007669.html"
    }
  };
  
  // ✅ This always returns mockData regardless of URL
  const api = {
    get: async () => {
      return Promise.resolve({ data: mockData });
    }
  };
  
  export default api;
  