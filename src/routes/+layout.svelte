<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/logo.svg';

	// icon imports
	import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';
	import EnvelopeIcon from 'phosphor-svelte/lib/EnvelopeIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import InstagramLogoIcon from 'phosphor-svelte/lib/InstagramLogoIcon';
	import PinterestLogoIcon from 'phosphor-svelte/lib/PinterestLogoIcon';
	import ReadCvLogoIcon from 'phosphor-svelte/lib/ReadCvLogoIcon';

	const externalLinks = [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/vivianwli/',
			icon: LinkedinLogoIcon
		},
		{
			name: 'email',
			url: 'mailto:vivianwli.design@gmail.com',
			icon: EnvelopeIcon
		},
		{
			name: 'github',
			url: 'https://github.com/vivianwli',
			icon: GithubLogoIcon
		},
		{
			name: 'instagram',
			url: 'https://www.instagram.com/mclovivian',
			icon: InstagramLogoIcon
		},
		{
			name: 'pinterest',
			url: 'https://www.pinterest.com/mclovivian',
			icon: PinterestLogoIcon
		},
		{
			name: 'readcv',
			url: '/resume',
			icon: ReadCvLogoIcon,
			text: 'Resume',
		}
	];

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>vivian li ᯓ★</title>
</svelte:head>

<div class="min-h-screen bg-primary/10">
	<header class="flex items-center justify-between px-5 py-5">
		<img src={logo} alt="Logo" class="w-20 h-10 object-cover"/>
		<div id="external-links" class="flex gap-2 bg-slate-50/60 border border-slate-800/40 px-2 py-2 rounded shadow-lg shadow-slate-800/5 backdrop-blur-sm">
			{#each externalLinks as link (link.name)}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1">
					<link.icon size={24} class="text-slate-800"/>
					{#if link.text}
						<span>{link.text}</span>
					{/if}
				</a>
			{/each}
		</div>
	</header>
</div>
{@render children()}
