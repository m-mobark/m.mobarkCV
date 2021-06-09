import React from 'react';
import { FaFacebook,FaGithub,FaLinkedin,FaStackOverflow,FaGripLinesVertical,FaUniversity,FaUserGraduate} from 'react-icons/fa';
import { ImHome,ImMail2,ImMobile } from 'react-icons/im';

import './Css/Slider.css';

export default function Slider() {
	return (
		<div className="profile">
			<div className="photo">
				<img
					src="https://media-exp3.licdn.com/dms/image/C4D03AQGihGek2NAVug/profile-displayphoto-shrink_200_200/0/1516274515012?e=1628726400&v=beta&t=EvjWSDhq2aeYSgTNhmOJIkmJBw4fyz0tpIpNk69J5Cs"
					alt
					class=" img-fluid mx-auto d-block shadow-sm rounded-full img-thumbnail rounded-circle"
				/>
			</div>

			<div className="info">
				<h1>
				
					
					<b className="nav-item">
						<a className="nav-link disabled"  tabIndex="-1" aria-disabled="true">
							M.Mobark<br/>
							<h5>Softwar Engener</h5>
						</a>
						<ul>
					<ImMail2 size="0em" /> <h5><FaUserGraduate/> Bachelor’s degree in computer science<br/> from Faculty of computer science <br/>and Artificial Intelligence <br/></h5>
					<h5><FaUniversity/> Helwan University, Egypt</h5>
				</ul>
				
					</b>
					
				</h1>
				<h2>
					<ImHome size="1em" /> Cairo,Egypt
					
				
				</h2>
				<ul>
					<ImMail2 /> mohammedmobark96@gmail.com
				</ul>

				<ul>
					<ImMobile size="1.5em"/>+201090640032<FaGripLinesVertical/>+201010696535
				</ul>
				<h1>
					<a target="_blank" href="https://www.linkedin.com/in/mohammed-mobarak-78b4a2140/">
						
						<FaLinkedin />
					</a>
					<a className="Githab" target="_blank" href="https://github.com/m-mobark">
						
						<FaGithub />
					</a>

					<a
						className="stackoverfllow"
						target="_blank"
						href="https://stackoverflow.com/users/12700914/m-mobark">
						
						<FaStackOverflow />
					</a>

					<a target="_blank" href="https://www.facebook.com/mohammed.mobark.948">
						
						<FaFacebook />
					</a>
				</h1>
			</div>
		</div>
	);
}
