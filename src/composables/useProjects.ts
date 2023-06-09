import winterman_banner_src from '../assets/winterman_banner.png'
import link_pack_banner_src from '../assets/link_pack_banner.png'

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
      banner_src: winterman_banner_src,
      github_href: 'https://github.com/davsilvam/winterman-app',
      deploy_href: 'https://winterman-app.vercel.app'
    },
    {
      name: 'Link Pack',
      description:
        'Agregador de links inspirado no Linktree. Ele serve para facilitar o fluxo do meu instagram para minhas demais redes.',
      banner_src: link_pack_banner_src,
      github_href: 'https://github.com/davsilvam/link-pack-v2',
      deploy_href: 'https://linkpack.vercel.app'
    }
  ]

  return {
    projects
  }
}
