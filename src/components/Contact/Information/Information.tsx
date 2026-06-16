import { profile } from '../../../data/profile';

function Information() {
  return (
    <>
      <a href={`mailto:${profile.email}`}>Email</a>
      <a href={`tel: ${profile.phone}`}>Telephone</a>
      <a href={`${profile.github}`} target="_blank" rel="noopener noreferrer">
        {' '}
        GitHub{' '}
      </a>
    </>
  );
}
export default Information;
