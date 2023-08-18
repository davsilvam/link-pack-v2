import wintermanBannerSrc from '../assets/winterman_banner.png'
import linkPackBannerSrc from '../assets/link_pack_banner.png'
import movieshelfBannerSrc from '../assets/movieshelf_banner.png'

interface Project {
  name: string
  description: string
  banner_src: string
  github_href: string
  deploy_href: string
}

export function useProjects() {
  const projects: Project[] = [
    {
      name: 'Winterman',
      description:
        'O Winterman é um projeto criado com a Open Weather API, uma API de clima, e se baseia em um página que traz o clima da cidade que o usuário pesquisar.',
      banner_src: wintermanBannerSrc,
      github_href: 'https://github.com/davsilvam/winterman-app',
      deploy_href: 'https://winterman-app.vercel.app',
    },
    {
      name: 'Link Pack',
      description:
        'Agregador de links inspirado no Linktree. Ele serve para facilitar o fluxo do meu instagram para minhas demais redes.',
      banner_src: linkPackBannerSrc,
      github_href: 'https://github.com/davsilvam/link-pack-v2',
      deploy_href: 'https://linkpack.vercel.app',
    },
    {
      name: 'Movieshelf',
      description:
        'A Movieshelf é uma aplicação que mostra filmes e suas informações, diretamente do catálogo do TMDB.',
      banner_src: movieshelfBannerSrc,
      github_href: 'https://github.com/davsilvam/movieshelf',
      deploy_href: 'https://themovieshelf.vercel.app',
    },
  ]

  return {
    projects,
  }
}
