import graphicUrl from '../../../../assets/svg/web-hosting.svg';
import { Heading } from '../../components';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon,
} from '@wordpress/components';

const WebHostingSection = () => {
	return (
		<section className="wppb-section wppb-section-home-hosting">
			<img
				src={ graphicUrl }
				className="section-graphic"
				alt={ __( 'Hosting illustration', 'wp-plugin-bluehost' ) }
			/>
			<Card size="large" className="wppb-section-card">
				<CardHeader>
					<Heading level="3">
						{ __( 'Web Hosting', 'wp-plugin-bluehost' ) }
					</Heading>
					<p>
						{ __(
							'Access & manage your Bluehost account.',
							'wp-plugin-bluehost'
						) }
					</p>
				</CardHeader>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="desktop" />{ ' ' }
							{ __( 'Manage Hosting', 'wp-plugin-bluehost' ) }
						</Heading>
						<p>
							{ __(
								'Manage site backups, performance options and billing.',
								'wp-plugin-bluehost'
							) }
						</p>
					</div>
					<Button
						variant="primary"
						href={
							`https://www.bluehost.com.au/members/?` +
							`&utm_campaign=` +
							`&utm_content=home_hosting_sites_link` +
							`&utm_term=manage_sites` +
							`&utm_medium=brand_plugin` +
							`&utm_source=wp-admin/admin.php?page=bluehost#/home`
						}
						target="_blank"
						icon="desktop"
					>
						{ __( 'Manage Sites', 'wp-plugin-bluehost' ) }
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="email" />{ ' ' }
							{ __( 'Email', 'wp-plugin-bluehost' ) }
						</Heading>
						<p>
							{ __(
								'Create new email addresses and manage your inbox.',
								'wp-plugin-bluehost'
							) }
						</p>
					</div>
					<Button
						variant="primary"
						href={
							`https://www.bluehost.com.au/members/email-hosting?` +
							`&utm_campaign=` +
							`&utm_content=home_hosting_email_link` +
							`&utm_term=manage_email` +
							`&utm_medium=brand_plugin` +
							`&utm_source=wp-admin/admin.php?page=bluehost#/home`
						}
						target="_blank"
						icon="email"
					>
						{ __( 'Manage Email', 'wp-plugin-bluehost' ) }
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="admin-site" />{ ' ' }
							{ __( 'Domains', 'wp-plugin-bluehost' ) }
						</Heading>
						<p>
							{ __(
								'Find fresh domains, point them at sites and get found online.',
								'wp-plugin-bluehost'
							) }
						</p>
					</div>
					<Button
						variant="secondary"
						href={
							`https://www.bluehost.com.au/members/domain-club?` +
							`&utm_campaign=` +
							`&utm_content=home_hosting_domain_link` +
							`&utm_term=find_domain` +
							`&utm_medium=brand_plugin` +
							`&utm_source=wp-admin/admin.php?page=bluehost#/home`
						}
						target="_blank"
						icon="admin-site"
					>
						{ __( 'Find a Domain', 'wp-plugin-bluehost' ) }
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="sos" />{ ' ' }
							{ __( 'Help', 'wp-plugin-bluehost' ) }
						</Heading>
						<p>
							{ __(
								'Find how-to articles in our Knowledge Base and speak with our award-winning support team.',
								'wp-plugin-bluehost'
							) }
						</p>
					</div>
					<Button
						variant="secondary"
						href="#/help"
						icon="sos"
						className="callout-link-help"
					>
						{ __( 'Get Help', 'wp-plugin-bluehost' ) }
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default WebHostingSection;
