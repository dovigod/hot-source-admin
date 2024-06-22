import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const PAGE_INFO = {
  '/dashboard/content': {
    major: '컨텐츠 목록을 조회하는 페이지에요',
    comment: ''
  },
  '/dashboard/content/edit': {
    major: '컨텐츠 목록을 편집하는 페이지에요',
    comment: '컨텐츠가 노출되는 순서를 변경할 수 있어요'
  },
  '/dashboard/content/name': {
    major: (params: Params) => `컨텐츠 ${params.name}에 대한 페이지에요`,
    comment: ''
  },
  '/dashboard/content/name/edit': {
    major: (params: Params) => `컨텐츠 ${params.name}를 업데이트 할 수 페이지에요`,
    comment: '컨텐츠 그 자체에 대한 메타데이터를 수정할 수 있어요'
  },
  '/dashboard/content/name/version': {
    major: (params: Params) => `${params.name}의 버전(${params.version})에 대한 페이지에요`,
    comment: '컨텐츠의 해당 버전에 등록된 플로우와 레퍼런스 이미지들을 조회할 수 있어요'
  },
  '/dashboard/content/name/version/edit': {
    major: (params: Params) => `${params.name}의 버전(${params.version})을 업데이트 할 수 있는 페이지에요`,
    comment: '해당 시나리오 버전에 해당하는 플로우를 추가, 삭제, 수정, 정렬방식을 변화시킬 수 있어요'
  }
}

