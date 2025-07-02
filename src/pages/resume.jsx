import React from 'react';
import styled from 'styled-components';

const Paper = styled.div`
	margin: 40px auto 40px; /* top margin pushes it below navbar */
    padding: 4rem;
    width: 900px;
    background-color: #f5f5dc;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	color: #000;
	text-align: left;
`;

const ContactList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
`;

const ContactItem = styled.a`
	color: #333;
	text-decoration: underline;
	font-size: 1rem;

	&:hover
	{
		text-decoration: underline;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const Resume = () => {
	return (
		<Paper>
			<h1 style={{textAlign: 'center'}}>Mihir Mankikar</h1>
			<ContactList>
				<ContactItem href="mailto:mihir.mankikar@gmail.com">mihir.mankikar@gmail.com</ContactItem>
				<ContactItem href="https://github.com/mihirm-06" target="_blank" rel="noreferrer">github/mihirm-06</ContactItem>
				<ContactItem href="https://linkedin.com/in/mihirm06" target="_blank" rel="noreferrer">linkedin/in/mihirm06</ContactItem>
			</ContactList>
			<br />
			<h2>Education</h2>
			<hr />
			<Row style={{fontWeight: 'bold'}}>
				<span>Texas A&M University - College Station, TX</span>
				<span>Aug 2024 - May 2028</span>
			</Row>
			<Row>
				<span>Bachelor of Science in Computer Science, Minor in Statistics</span>
				<span>3.96/4.00</span>
			</Row>
		</Paper>
	)
};

export default Resume;