import type { Thing, WithContext, WebSite, Article, BreadcrumbList } from 'schema-dts';
import { TITLE_CONSTANTS } from '../constants';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export type JsonldBreadcrumbParam = {
	categoryTitle: string;
	categorySlug: string;
	title: string;
	slug: string;
};

export type JsonldArticleParam = {
	cover: string;
	title: string;
	slug: string;
	desc: string;
};

export function getJsonLdWebsite(): WithContext<WebSite> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: `${TITLE_CONSTANTS.PATH}`,
		description: "Baca Al-Qur'an dari browser | Baca-Quran.id",
		image: `${TITLE_CONSTANTS.PATH}icon.png`,
		thumbnailUrl: `${TITLE_CONSTANTS.PATH}icon.png`,
		name: 'Baca-Quran.id',
		sameAs: [
			'https://instagram.com/maz_ipan',
			'https://twitter.com/Maz_Ipan',
			'https://id.linkedin.com/in/mazipan',
			'https://github.com/mazipan'
		]
	};
}

export function getJsonLdBreadcrumb({
	categoryTitle,
	categorySlug,
	title,
	slug
}: JsonldBreadcrumbParam): WithContext<BreadcrumbList> {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: TITLE_CONSTANTS.PATH
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: categoryTitle,
				item: `${TITLE_CONSTANTS.PATH}${categorySlug}/`
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: `${TITLE_CONSTANTS.PATH}${slug}/`
			}
		]
	};
}

export function getJsonLdArticle({
	slug,
	title,
	cover,
	desc
}: JsonldArticleParam): WithContext<Article> {
	return {
		'@context': 'https://schema.org',
		'@type': 'NewsArticle',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${TITLE_CONSTANTS.PATH}${slug}/`
		},
		headline: title,
		image: [`${TITLE_CONSTANTS.PATH}${cover}`],
		datePublished: new Date().toISOString(),
		dateModified: new Date().toISOString(),
		author: {
			'@type': 'Person',
			name: 'Irfan Maulana'
		},
		description: desc,
		publisher: {
			'@type': 'Organization',
			name: 'mazipan',
			logo: {
				'@type': 'ImageObject',
				url: `${TITLE_CONSTANTS.PATH}icon.png`
			}
		}
	};
}
