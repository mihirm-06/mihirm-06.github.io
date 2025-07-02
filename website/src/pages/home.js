import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Amogus from '../assets/amogus.gif';

const Container = styled.div`
	display: flex;
	justify-content: space-between;  /* puts max space between text & image */
	align-items: center;
	padding: 4rem 2rem;
	max-width: 1200px;
	margin: 0 auto;
	min-height: 90vh;
	gap: 6rem;

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		gap: 2rem;
  }
`;

const Left = styled.div`
	max-width: 542px;
	text-align: left;
`;

const Right = styled.div`
	img {
		width: 400px;
		height: 400px;
		object-fit: cover;
		border-radius: 12px;
	}
	
	@media (max-width: 768px) {
		margin-top: 2rem;
	}
`;

const Heading = styled.h1`
	font-size: 5rem;
	font-weight: 900;
	line-height: 1.2;
	color: #f5f5dc;
`;

const SubHeading = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	margin-top: 1.5rem;
	color: #f5f5dc;
`;

const ContactRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 542px;
	margin-top: 2rem;
	color: #f5f5dc;

	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}
`;

const ContactLink = styled.a`
	font-size: 1rem;
	color: #f5f5dc;
	text-decoration: underline;
	text-underline-offset: 4px;

  	&:hover 
	{
		color: #d2b48c;
		transition: 0.15s
    }
`;

const SocialIcons = styled.div`
	display: flex;
	gap: 1.5rem;
	font-size: 1.5rem;

	a 
	{
		color: inherit; /* ensures icons inside links inherit this color */

		&:hover 
		{
			color: #d2b48c;
			transition: 0.15s
		}
	}
`;

export const Home = () => {

	// render animations only on first load
	const [hasAnimated, setHasAnimated] = useState(true)

	useEffect(() => {
		const animated = sessionStorage.getItem('isHomeAnimated');
		if(!animated)
		{
			setHasAnimated(false); // show animation
			sessionStorage.setItem('isHomeAnimated', 'true'); // update boolean
		}
	}, []);

	return (
		<Container>
			<Left>
				<Heading>
					{hasAnimated ? <>Hi,<br />I'm Mihir.<TypeAnimation sequence={""}/></> : <TypeAnimation sequence={[1000, "Hi, \n", 500, "Hi, \nI'm Mihir."]} speed={20} style={{ whiteSpace: 'pre-line' }}/>}
				</Heading>
				<motion.div
					initial={ hasAnimated ? false : { opacity: 0}}
					animate={{ opacity: 1}}
					transition={{ delay: 3.0, duration: 1.0, ease: "easeInOut"}}>
					<SubHeading>
						I'm a computer science + statistics student at Texas A&M interested in machine learning and full-stack development.
					</SubHeading>
					<ContactRow>
						<ContactLink href="mailto:mihir.mankikar@gmail.com">send me an email →</ContactLink>
						<SocialIcons>
							<motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
								<a href="https://github.com/mihirm-06" target="_blank" rel="noreferrer"><BsGithub /></a>
							</motion.div>
							<motion.div whileHover={{ y: -4}} transition={{ type: 'spring', stiffness: 300 }}>
								<a href="https://linkedin.com/in/mihirm06" target="_blank" rel="noreferrer"><BsLinkedin /></a>
							</motion.div>
						</SocialIcons>
					</ContactRow>
				</motion.div>
			</Left>
			<motion.div
				initial={ hasAnimated ? false : { opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0}}
				transition={{ delay: 3.5, duration: 1.0, ease: "easeOut"}}>
				<Right>
					<img src={Amogus} alt="Amogus" />
				</Right>
			</motion.div>
		</Container>
	);
};

export default Home;
