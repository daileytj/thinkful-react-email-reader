const React = require( 'react' );

const Mail = function( props ) {
	const MAIL = require( '../constants/mail.js' )[ props.params.mailboxId ][ props.params.mailId ];

	return (
		<section className="mail">
			<header>
				<h3>{ MAIL.title }</h3>
				<dl>
					<dt>To:</dt>
					<dd>{ MAIL.to }</dd>
					<dt>From:</dt>
					<dd>{ MAIL.from }</dd>
				</dl>
			</header>
			<p>{ MAIL.content }</p>
		</section>
	);
};

module.exports = Mail;
