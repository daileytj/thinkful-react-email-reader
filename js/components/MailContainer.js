const React = require( 'react' );
const Link = require( 'react-router' ).Link;


const MailContainer = function( props ) {
	const MAILBOX_ID = props.mailboxId;
	const MAIL = require( '../constants/mail.js' )[ MAILBOX_ID ];

	// any mail?
	if (! MAIL) {
		return <p>No mail.</p>;
	}

	const mailTableBody = Object.keys( MAIL ).map(function( mailId ) {
		const mail = MAIL[ mailId ];
		const linkTo = `${ MAILBOX_ID }/${ mail.id }`;
		return (
			<tr>
				<td>{ mail.id }</td>
				<td>{ mail.from }</td>
				<td><Link to={ linkTo }>{ mail.title }</Link></td>
			</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>From</th>
					<th>Subject</th>
				</tr>
			</thead>
			<tbody>
				{ mailTableBody }
			</tbody>
		</table>
	);
};

module.exports = MailContainer;
