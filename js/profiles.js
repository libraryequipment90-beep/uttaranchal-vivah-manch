const PROFILES = [
  { id: "UV24120", name: "Mayank Joshi", gender: "groom", community: "brahmin", region: "garhwali", caste: "गढ़वाली ब्राह्मण", gotra: "Bharadwaj", age: 29, dob: "12 Mar 1997", height: "5'9\"", education: "B.Tech, IIT", job: "Software Engineer", salary: "18 LPA", city: "Dehradun", presentAddress: "Rajpur Road, Dehradun", village: "Naugaon", district: "Pauri Garhwal", native: "Pauri Garhwal", manglik: "Non Manglik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/32.jpg", father: "Ramesh Joshi", mother: "Kamla Joshi", phone: "9667812340" },
  { id: "UV23881", name: "Himani Pant", gender: "bride", community: "brahmin", region: "kumaoni", caste: "कुमाऊँनी ब्राह्मण", gotra: "Kashyap", age: 26, dob: "08 Jul 2000", height: "5'4\"", education: "MBA", job: "HR Manager", salary: "12 LPA", city: "Delhi", presentAddress: "Dwarka Sector 7, Delhi", village: "Someshwar", district: "Almora", native: "Almora", manglik: "Anshik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/44.jpg", father: "Suresh Pant", mother: "Meena Pant", phone: "9667812341" },
  { id: "UV23209", name: "Mohit Rawat", gender: "groom", community: "rajput", region: "garhwali", caste: "गढ़वाली राजपूत", gotra: "Rawat", age: 31, dob: "21 Jan 1995", height: "5'10\"", education: "B.E.", job: "Army Officer", salary: "Govt.", city: "Pune", presentAddress: "Khadki Cantonment, Pune", village: "Ghansali", district: "Tehri Garhwal", native: "Tehri", manglik: "Non Manglik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/52.jpg", father: "Ganesh Rawat", mother: "Pushpa Rawat", phone: "9667812342" },
  { id: "UV22910", name: "Akansha Negi", gender: "bride", community: "rajput", region: "kumaoni", caste: "कुमाऊँनी राजपूत", gotra: "Negi", age: 25, dob: "15 Sep 2001", height: "5'5\"", education: "MBBS", job: "Doctor", salary: "14 LPA", city: "Nainital", presentAddress: "Mallital, Nainital", village: "Munsiyari", district: "Pithoragarh", native: "Pithoragarh", manglik: "Non Manglik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/68.jpg", father: "Virendra Negi", mother: "Saroj Negi", phone: "9667812343" },
  { id: "UV22114", name: "Sandeep Dhami", gender: "groom", community: "other", region: "kumaoni", caste: "शिल्पकार", gotra: "Dhami", age: 30, dob: "04 Apr 1996", height: "5'8\"", education: "M.Com", job: "Bank PO", salary: "11 LPA", city: "Haldwani", presentAddress: "Kaladhungi Road, Haldwani", village: "Kapkot", district: "Bageshwar", native: "Bageshwar", manglik: "Non Manglik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/22.jpg", father: "Harish Dhami", mother: "Geeta Dhami", phone: "9667812344" },
  { id: "UV21840", name: "Swati Rawat", gender: "bride", community: "rajput", region: "garhwali", caste: "गढ़वाली राजपूत", gotra: "Rawat", age: 27, dob: "19 Nov 1998", height: "5'3\"", education: "M.Sc", job: "Teacher", salary: "8 LPA", city: "Haridwar", presentAddress: "Shivalik Nagar, Haridwar", village: "Gopeshwar", district: "Chamoli", native: "Chamoli", manglik: "Anshik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/21.jpg", father: "Naveen Rawat", mother: "Lata Rawat", phone: "9667812345" },
  { id: "UV21450", name: "Gaurav Kumar Sati", gender: "groom", community: "brahmin", region: "garhwali", caste: "गढ़वाली ब्राह्मण", gotra: "Sati", age: 28, dob: "02 Feb 1998", height: "5'11\"", education: "CA", job: "Chartered Accountant", salary: "16 LPA", city: "Delhi", presentAddress: "Rohini Sector 13, Delhi", village: "Augustmuni", district: "Rudraprayag", native: "Rudraprayag", manglik: "Non Manglik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/75.jpg", father: "Kailash Sati", mother: "Nirmala Sati", phone: "9667812346" },
  { id: "UV20962", name: "Jyoti Bisht", gender: "bride", community: "rajput", region: "garhwali", caste: "गढ़वाली राजपूत", gotra: "Bisht", age: 24, dob: "28 May 2002", height: "5'4\"", education: "B.Pharma", job: "Pharmacist", salary: "7 LPA", city: "Rishikesh", presentAddress: "Tapovan, Rishikesh", village: "Bhatwari", district: "Uttarkashi", native: "Uttarkashi", manglik: "Non Manglik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/33.jpg", father: "Prakash Bisht", mother: "Rekha Bisht", phone: "9667812347" },
  { id: "UV20666", name: "Abhishek Negi", gender: "groom", community: "rajput", region: "garhwali", caste: "गढ़वाली राजपूत", gotra: "Negi", age: 32, dob: "11 Aug 1994", height: "5'9\"", education: "MBA", job: "Business", salary: "20 LPA", city: "Lucknow", presentAddress: "Gomti Nagar, Lucknow", village: "Srinagar", district: "Pauri Garhwal", native: "Pauri", manglik: "Non Manglik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/11.jpg", father: "Mohan Negi", mother: "Suman Negi", phone: "9667812348" },
  { id: "UV19849", name: "Kanika Joshi", gender: "bride", community: "brahmin", region: "garhwali", caste: "गढ़वाली ब्राह्मण", gotra: "Vashishth", age: 26, dob: "06 Dec 1999", height: "5'2\"", education: "B.A. LLB", job: "Advocate", salary: "9 LPA", city: "Dehradun", presentAddress: "Clement Town, Dehradun", village: "Srinagar", district: "Pauri Garhwal", native: "Srinagar Garhwal", manglik: "Non Manglik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/12.jpg", father: "Anil Joshi", mother: "Poonam Joshi", phone: "9667812349" },
  { id: "UV19329", name: "Rishabh Ishtwal", gender: "groom", community: "other", region: "kumaoni", caste: "अन्य पिछड़ा वर्ग", gotra: "Ishtwal", age: 29, dob: "23 Jun 1997", height: "5'7\"", education: "B.Tech", job: "Data Analyst", salary: "13 LPA", city: "Noida", presentAddress: "Sector 62, Noida", village: "Ranikhet", district: "Almora", native: "Almora", manglik: "Anshik", looking: "bride", photo: "https://randomuser.me/api/portraits/men/36.jpg", father: "Deepak Ishtwal", mother: "Anita Ishtwal", phone: "9667812350" },
  { id: "UV18885", name: "Preeti Lohani", gender: "bride", community: "brahmin", region: "kumaoni", caste: "कुमाऊँनी ब्राह्मण", gotra: "Lohani", age: 27, dob: "14 Oct 1998", height: "5'5\"", education: "M.Tech", job: "Software Engineer", salary: "15 LPA", city: "Bengaluru", presentAddress: "Whitefield, Bengaluru", village: "Bhimtal", district: "Nainital", native: "Nainital", manglik: "Non Manglik", looking: "groom", photo: "https://randomuser.me/api/portraits/women/65.jpg", father: "Yogesh Lohani", mother: "Sunita Lohani", phone: "9667812351" }
];

const DEMO_ACCOUNTS = [
  { id: "UV24120", password: "joshi123" },
  { id: "UV23881", password: "pant123" },
  { id: "UV23209", password: "rawat123" }
].map((a) => {
  const p = PROFILES.find((x) => x.id === a.id);
  return { ...p, password: a.password };
});

function currentUser() {
  try {
    return JSON.parse(localStorage.getItem("uv-user") || "null");
  } catch (e) {
    return null;
  }
}

function loginUser(id, password) {
  const acc = DEMO_ACCOUNTS.find(
    (a) => a.id.toLowerCase() === String(id).trim().toLowerCase() && a.password === String(password).trim()
  );
  if (!acc) return null;
  const user = { ...acc };
  delete user.password;
  localStorage.setItem("uv-user", JSON.stringify(user));
  return user;
}

function logoutUser() {
  localStorage.removeItem("uv-user");
}

const STORIES = [
  { names: "Mohit Rawat & Mamta Rawat", date: "22 Aug 2026", place: "Tehri", quote: "पहाड़ी परिवारों की सूची साफ थी। दोनों घर जल्दी बात पर बैठ गए।", photo: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
  { names: "Himanshu Kholiya & Swati Rawat", date: "07 Sep 2026", place: "Almora", quote: "गोत्र और पैतृक गांव एक जगह मिल गया। परिवार भी साथ चल पड़े।", photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80" },
  { names: "Abhishek Negi & Jyoti Bisht", date: "25 Jul 2026", place: "Pauri", quote: "गढ़वाल से कुमाऊँ तक सही मेल मिला। विश्वास और समय दोनों रहे।", photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" },
  { names: "Ankit Rawat & Reena Rawat", date: "02 Jul 2026", place: "Dehradun", quote: "निशुल्क सूची से शुरुआत की। तीन महीने में रिश्ता तय हो गया।", photo: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80" }
];

const CASTES = {
  garhwali: {
    brahmin: ["Joshi", "Uniyal", "Nautiyal", "Semwal", "Dimri", "Gairola", "Dobhal", "Bahuguna", "Khanduri", "Thapliyal", "Sati", "Maithani", "Chamoli", "Bhatt"],
    rajput: ["Rawat", "Negi", "Bisht", "Rana", "Chauhan", "Panwar", "Bhandari", "Aswal", "Barthwal", "Kunwar"],
    other: ["Shilpkar", "Arya", "Das"]
  },
  kumaoni: {
    brahmin: ["Pant", "Tiwari", "Pathak", "Pandey", "Joshi", "Lohani", "Upreti", "Bhatt", "Tripathi", "Pande"],
    rajput: ["Bisht", "Negi", "Bohra", "Karki", "Mehra", "Chaudhary", "Rawat", "Bhandari"],
    other: ["Shilpkar", "Arya", "Tamta"]
  }
};

function casteOptions(region, community) {
  if (region && community && CASTES[region] && CASTES[region][community]) return CASTES[region][community];
  if (community) {
    const set = new Set([...(CASTES.garhwali[community] || []), ...(CASTES.kumaoni[community] || [])]);
    return [...set];
  }
  return [];
}

function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

function filterProfiles(list, filters) {
  return list.filter((p) => {
    if (filters.community && p.community !== filters.community) return false;
    if (filters.region && p.region && p.region !== filters.region) return false;
    if (filters.caste && !(p.caste || "").toLowerCase().includes(String(filters.caste).toLowerCase())) return false;
    if (filters.gender && p.gender !== filters.gender) return false;
    if (filters.city && !(`${p.city} ${p.native} ${p.village} ${p.district} ${p.presentAddress}`).toLowerCase().includes(filters.city.toLowerCase())) return false;
    if (filters.q && !(p.name + p.id + p.job + p.father + p.mother + p.caste).toLowerCase().includes(filters.q.toLowerCase())) return false;
    if (filters.age) {
      const parts = String(filters.age).split("-").map(Number);
      if (parts.length === 2 && (p.age < parts[0] || p.age > parts[1])) return false;
    }
    return true;
  });
}

function photoStyle(url) {
  return `background-image:linear-gradient(180deg, transparent 35%, rgba(27,28,50,0.72)), url('${url}');background-size:cover;background-position:center;`;
}
