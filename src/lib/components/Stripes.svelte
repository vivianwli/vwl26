<script lang="ts">

  // generate wobbly path
  const wobblePath = (x: number, height: number = 2000) => {
    const points = [];
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const y = (i / steps) * height;
      const offset = (Math.random() - 0.5) * 2; // random offset for wobble
      points.push(`${x + offset},${y}`);
    }
    return `M${points.join(' L')}`;
  };

  const startJitter = (stripe: stripe) => {
    stripe.interval = setInterval(() => {
     stripe.d = wobblePath(stripe.x);
    }, 100);
  };

  const stopJitter = (stripe: stripe) => {
    if (stripe.interval) {
      clearInterval(stripe.interval);
      stripe.interval = null;
    }
    stripe.d = wobblePath(stripe.x);
  };

  type stripe = {
    x: number;
    d: string;
    interval: NodeJS.Timeout | null;
  };

  let stripes = $state(
    Array.from({ length: 200 }, (_, i) => ({
      x: i * 10,
      d: wobblePath(i * 10),
      interval: null,
    }))
  );
</script>

<svg class="fixed inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  {#each stripes as stripe (stripe.x)}
    <path
        d={stripe.d}
        class="stroke-transparent stroke-10 fill-none pointer-events-auto"
        role="presentation"
        onclick={() => console.log(`Clicked stripe at x=${stripe.x}`)}
        onmouseenter={() => startJitter(stripe)}
        onmouseleave={() => stopJitter(stripe)}
      />
    <path
      d={stripe.d}
      class="stroke-primary/10 stroke-3 fill-none hover:stroke-primary/20 transition-colors duration-300"
      role="presentation"
      onclick={() => console.log(`Clicked stripe at x=${stripe.x}`)}
      onmouseenter={() => startJitter(stripe)}
      onmouseleave={() => stopJitter(stripe)}
     />
  {/each}
</svg>