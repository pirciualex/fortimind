<script lang="ts">
  import { page } from "$app/stores";

  let links = [
    {
      url: "/dashboard",
      name: "home",
      icon: "house",
      isActive: true,
    },
    {
      url: "/goals",
      name: "your goals",
      icon: "crosshairs",
      isActive: false,
    },
    {
      url: "/meditate",
      name: "meditate",
      icon: "spa",
      isActive: false,
    },
    {
      url: "/habits",
      name: "your habits",
      icon: "medal",
      isActive: false,
    },
    {
      url: "/statistics",
      name: "statistics",
      icon: "chart-line",
      isActive: false,
    },
  ];

  page.subscribe((p) => {
    links = links.map((link) => {
      link.isActive = link.url === p.url.pathname;
      return link;
    });
  });
</script>

<nav>
  {#each links as link}
    <a href={link.url} class:active={link.isActive}>
      <i class="fa-solid fa-{link.icon}" />
      {#if link.isActive}
        <div class="link">
          {link.name}
        </div>
      {/if}
    </a>
  {/each}
</nav>

<style lang="postcss">
  nav {
    @apply flex justify-between px-4 bg-dark h-[10vh];
  }

  nav a {
    @apply flex flex-col justify-center items-center text-primary
    uppercase opacity-60;
  }

  nav a.active {
    @apply opacity-100;
  }

  nav a i {
    @apply text-2xl;
  }

  nav a .link {
    @apply text-xs;
  }
</style>
