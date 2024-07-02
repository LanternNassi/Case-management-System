import StorageIcon from "@mui/icons-material/Storage";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";


export const services = [
    {
      name: "Case information Storage",
      description:
        "This service is meant to allow insertion and retrieval of court case information such as Case description , Proof , etc.",
      icon: StorageIcon,
    },
    {
      name: "Case Scheduling",
      description:
        "This service is meant to allocate court sittings or hearings based on the available case information depending on factors such as date reported.",
      icon: ScheduleIcon,
    },
    {
      name: "Case Priotization",
      description:
        "This function prioritizes cases based on factors such as the time needed to gather evidence and the number of sittings needed.",
      icon: PriorityHighIcon,
    },
    {
      name: "Case Tracking",
      description:
        "This feature is based off the availability of the different schedules and case information. ",
      icon: LocationSearchingIcon ,
    },
  ];
