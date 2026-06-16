import { profile } from '../../../data/profile';
import { FaPhoneAlt } from "react-icons/fa";


import { SiProtonmail,SiGithub } from "react-icons/si";

function Information() {
  return (
    <>
      <a href={`mailto:${profile.email}`}><SiProtonmail/> Email</a>
      <a href={`tel: ${profile.phone}`}><FaPhoneAlt /> Telephone</a>
      <a href={`${profile.github}`} target="_blank" rel="noopener noreferrer">
        <SiGithub size={16}/> GitHub
      </a>
    </>
  );
}
export default Information;
