export interface TravelLocation {
  id: string;
  name: string;
  location: string;
  date: string;
  month?: string;
  year: string;
  description: string;
  imageUrl: string;
  status: 'visited' | 'upcoming';
  role?: string; // For timeline (e.g., 'Filming', 'Recording', 'Scouting')
}

// Main travel locations data - Add new locations here
export const travelLocations: TravelLocation[] = [
  // TEMPLATE FOR NEW LOCATION:
  // {
  //   id: 'unique-id',
  //   name: 'Location Name',
  //   location: 'State/Country',
  //   date: 'Full Date',  // e.g., 'March 2025'
  //   month: 'Month',
  //   year: '2025',
  //   description: 'Poetic description of the location and filming experience',
  //   imageUrl: 'https://your-image-url.jpg',
  //   status: 'visited' or 'upcoming',
  //   role: 'Filming' // Optional: what you did there
  // },
  
  {
    id: '1',
    name: 'Mount Rainier',
    location: 'Washington',
    date: 'October 2025',
    month: 'October',
    year: '2025',
    description: 'Autumn\'s golden embrace on the mountain\'s lower slopes, where alpine lakes mirror the sky and evergreen forests stand in solemn beauty. Mount Rainier reveals its quieter face through meadows painted in fall colors, offering intimate moments between the towering peak and wandering clouds.',
    imageUrl: 'https://images.unsplash.com/photo-1726500207029-facf1812017c?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'upcoming',
    role: 'Travel'
  },
  {
    id: '2',
    name: 'Puerto Rico',
    location: 'USA',
    date: 'May 2025',
    month: 'May',
    year: '2025',
    description: 'Caribbean sunsets paint the historic streets in warm amber light, where colonial architecture tells centuries-old stories. San Juan\'s vibrant colors and coastal charm create a perfect backdrop for capturing the rhythm of island life, from cobblestone plazas to ocean horizons.',
    imageUrl: 'https://images.unsplash.com/photo-1631111884082-69d25a0d10b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'visited',
    role: 'Travel'
  },
  {
    id: '3',
    name: 'Black Hills',
    location: 'South Dakota',
    date: 'March 2024',
    month: 'March',
    year: '2024',
    description: 'Weathered rock formations stand like ancient sentinels against prairie skies, where golden hour transforms rugged cliffs into glowing monuments. The Badlands\' otherworldly terrain offers dramatic contrasts between sharp ridges and vast horizons, perfect for capturing nature\'s sculptural artistry.',
    imageUrl: 'https://images.unsplash.com/photo-1620760585200-0bc41d637a84?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'visited',
    role: 'Travel'
  },
  {
    id: '4',
    name: 'Rapid City',
    location: 'South Dakota',
    date: 'September 2023',
    month: 'September',
    year: '2023',
    description: 'Monument Valley\'s iconic sandstone towers rise from the desert floor like nature\'s skyscrapers, painted in deep reds and oranges. These majestic buttes and mesas create a cinematic landscape where Western legends were born, offering endless compositions of light playing across ancient stone.',
    imageUrl: 'https://images.unsplash.com/photo-1745335484877-9a77ec3e2c99?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'visited',
    role: 'Travel'
  }
];

// Helper function to get locations sorted by date (newest first)
export const getSortedLocations = () => {
  return [...travelLocations].sort((a, b) => {
    const dateA = new Date(`${a.month} 1, ${a.year}`);
    const dateB = new Date(`${b.month} 1, ${b.year}`);
    return dateB.getTime() - dateA.getTime();
  });
};