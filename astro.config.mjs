// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightKbd from 'starlight-kbd';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightHeadingBadges from 'starlight-heading-badges';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightVideos from 'starlight-videos';
import starlightTocOverviewCustomizer from 'starlight-toc-overview-customizer';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightMarkdownBlocks from 'starlight-markdown-blocks';

import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightKbd({
					types: [
						{
							id: 'windows',
							label: 'Windows',
							default: true
						}
					]
				}),
				starlightAutoSidebar(),
				starlightHeadingBadges(),
				starlightImageZoom(),
				starlightVideos(),
				starlightTocOverviewCustomizer(),
				starlightScrollToTop({
					svgPath: 'M5 15L12 8L19 15',
					showTooltip: false,
				}),
				// starlightMarkdownBlocks(),
			],
			title: 'MUNUC-SFLS 组委会指南',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tapuzh/munuc-committe-guidelines' }],
			customCss: [
				'./src/styles/custom.css',
			],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN', // lang 是 root 语言必须的
				},
			},
			sidebar: [
				{
					label: '概览与组委会架构',
					autogenerate: { directory: '/overview/', },
				},
				{
					label: '各项准备工作',
					autogenerate: { directory: '/preparation', },
				},
				{
					label: '详细工作方案',
					items: [
						{ slug: 'departments/overview', },
						{
							label: '各部门详细工作方案',
							items: [
								{ slug: 'departments/organization', },
								{ slug: 'departments/administration', },
								{ slug: 'departments/technology', },
								{ slug: 'departments/academic', },
								{ slug: 'departments/volunteers', },
							],
						},
					],
				},
				{
					label: '会议期间',
					autogenerate: { directory: '/in-event', },
				},
				{
					label: '会议后',
					link: '/post-event',
					attrs: { style: 'font-size: var(--sl-text-lg); font-weight: 600; color: var(--sl-color-white);' },
				},
				{
					label: '致谢 & 后记',
					link: '/end',
					attrs: { style: 'font-size: var(--sl-text-lg); font-weight: 600; color: var(--sl-color-white);' },
				},
			],
		}),
	],
});
