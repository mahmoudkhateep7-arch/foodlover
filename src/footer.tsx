
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import LearnMoreLink from './utils/LearnMoreLinkC';

export default function Footer() {
  return (
    <div>
      <p className='flex [&_a]:m-0! text-xl flex-wrap justify-center items-center bg-black text-white py-5'>
        <span className=''>Copyright</span>
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {new Date().getFullYear()}
        <span className='pr-3'> all rights reserved | made by</span>
        <span onClick={() => { window.open('https:youtube.com', '_blank') }}>
          <LearnMoreLink text='Mahmoud Khateep'></LearnMoreLink>

        </span>
      </p>
    </div>
  )
}