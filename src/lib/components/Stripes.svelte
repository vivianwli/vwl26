<script lang="ts">

  type stripe = {
    x: number;
    d: string;
    interval: NodeJS.Timeout | null;
  };

  // function: generate wobbly path
  const wobblePath = (x: number, height: number = 2000) => {
    const points = [];
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const y = (i / steps) * height;
      const offset = (Math.random() - 0.5) * 1; // random offset for wobble
      points.push(`${x + offset},${y}`);
    }
    return `M${points.join(' L')}`;
  };

  // function: continuously regenerate path for jitter effect
  const startJitter = (stripe: stripe) => {
    stripe.interval = setInterval(() => {
     stripe.d = wobblePath(stripe.x);
    }, 60);
  };

  // function: stop jitter and reset path
  const stopJitter = (stripe: stripe) => {
    if (stripe.interval) {
      clearInterval(stripe.interval);
      stripe.interval = null;
    }
    stripe.d = wobblePath(stripe.x);
  };

  // initialize stripe paths
  let stripes = $state(
    Array.from({ length: 200 }, (_, i) => ({
      x: i * 10,
      d: wobblePath(i * 10),
      interval: null,
    }))
  );
</script>

<svg class="fixed w-full h-full" xmlns="http://www.w3.org/2000/svg">
  {#each stripes as stripe (stripe.x)}
    <g 
      class="group" 
      role="presentation"
      onmouseenter={() => startJitter(stripe)}
      onmouseleave={() => stopJitter(stripe)}
    >
      <path
          d={stripe.d}
          class="stroke-transparent stroke-10 fill-none"
        />
      <path
        d={stripe.d}
        class="stroke-primary/10 stroke-3 fill-none group-hover:stroke-primary/20 group-hover:stroke-4 transition-colors duration-300"
      />
    </g>
  {/each}
</svg>