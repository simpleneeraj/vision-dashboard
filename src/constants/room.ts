import DayApartment from "raw:assets/rooms/day/time=day-room=modern-apartment.png"
// --- Night Imports ---
import NightBackYard from "raw:assets/rooms/night/time=night-room=back-yard.png"
import NightBathroom from "raw:assets/rooms/night/time=night-room=bathroom.png"
import NightBedroom from "raw:assets/rooms/night/time=night-room=bedroom.png"
import NightClassicSittingRoom from "raw:assets/rooms/night/time=night-room=classic-sitting-room.png"
import NightCozyLoungeRoom from "raw:assets/rooms/night/time=night-room=cozy-lounge-room.png"
import NightDiningRoom from "raw:assets/rooms/night/time=night-room=dining-room.png"
import NightFamilyRoom from "raw:assets/rooms/night/time=night-room=family-room.png"
import NightGym from "raw:assets/rooms/night/time=night-room=gym.png"
import NightKitchen from "raw:assets/rooms/night/time=night-room=kitchen.png"
import NightLivingRoom from "raw:assets/rooms/night/time=night-room=living-room.png"
import NightApartment from "raw:assets/rooms/night/time=night-room=modern-apartment.png"
import NightMountainViewRoom from "raw:assets/rooms/night/time=night-room=mountain-view-room.png"
import NightOffice from "raw:assets/rooms/night/time=night-room=office.png"
import NightSpaciousLivingRoom from "raw:assets/rooms/night/time=night-room=spacious-living-room.png"
import NightWashroom from "raw:assets/rooms/night/time=night-room=washroom.png"

// --- Day Rooms Array ---
export const dayRooms = [{ name: "Apartment", source: DayApartment }]

// --- Night Rooms Array ---
export const nightRooms = [
  { name: "Back Yard", source: NightBackYard },
  { name: "Bathroom", source: NightBathroom },
  { name: "Bedroom", source: NightBedroom },
  { name: "Classic Sitting Room", source: NightClassicSittingRoom },
  { name: "Cozy Lounge Room", source: NightCozyLoungeRoom },
  { name: "Dining Room", source: NightDiningRoom },
  { name: "Family Room", source: NightFamilyRoom },
  { name: "Gym", source: NightGym },
  { name: "Kitchen", source: NightKitchen },
  { name: "Living Room", source: NightLivingRoom },
  { name: "Modern Apartment", source: NightApartment },
  { name: "Mountain View Room", source: NightMountainViewRoom },
  { name: "Office", source: NightOffice },
  { name: "Spacious Living Room", source: NightSpaciousLivingRoom },
  { name: "Washroom", source: NightWashroom }
]

// --- Grouped Export ---
const rooms = {
  day: dayRooms,
  night: nightRooms
}

export default rooms
