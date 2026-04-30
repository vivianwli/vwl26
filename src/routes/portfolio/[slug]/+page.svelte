<script lang="ts">
  let { data } = $props<{ project: { title: string; thumbnail: string; slug: string; description?: string } }>();
</script>

<div class="flex items-center justify-center h-full w-full">
  <h1>{data.project.title}</h1>
</div>
