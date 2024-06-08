import Link from "next/link";

export default function Home() {
  return (
    <main>
      This is main page for Admin, Authentications will be placed here
      <br />
      <br />
      <br />
      <span style={{ padding: "20px", fontSize: "16px", fontWeight: "bold" }}>
        상황 가정 :: content : (치지직) , version : v0.0.0 부터 v0.0.9까지 존재
      </span>
      <br />
      <br />
      <div>Site Map</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content"
        >
          content 리스트 보는 페이지
        </Link>
        :
        <span style={{ maxWidth: "800px" }}>
          content들을 리스팅하고 클릭하여 (/dashboard/content/:id) 페이지로
          이동가능하게끔 한다.
        </span>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/new"
        >
          새로운 컨텐츠를 추가하는 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          새로운 프로젝트를 추가하는 페이지. 이미지들은 이 시점에서 추가하지
          않는다.
          <br />
          (후순위) 편의상 이 시점에 이미지를 추가할 수 있게하면 좋다.
        </span>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/edit"
        >
          기존 컨텐츠 정보를 수정하는 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          일반적으로 해쉬태그, 및 카테고리 정보 수정하는 용도로 쓸듯하다.
        </span>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/:id"
        >
          content 보는 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          content에 속해 있는 이미지들을 볼수 있는 페이지. 기본적으로 가장 최신
          버전의 이미지 리스트가 보이며, 버전을 선택할 수 있다. 버전 선택시,
          (/dashboard/content/:id/:version)로 이동한다.
          <br />
          content 페이지에서 이미지를 클릭 시, 확대되며, 후순위로 확대경의
          기능을 넣는다. (주 컨텐츠가 이미지이므로, 이미지의 퀄리티의 중요성이
          높으니 있으면 최종 검수 느낌으로 좋을듯함)
          <br />
          또한 컨텐츠 내, 페이지(컨텐츠의 페이지, ex, 치지직의 로그인 페이지,
          대쉬보드 페이지 etc)
          <br />
          (후순위) 좌측에 파일 디렉토리 형태로 이미지들의 이름 리스트를 나열하여
          클릭 시, 해당 이미지를 focusing 할수 있도록한다. 해당 기능은 밑에 모든
          페이지들이 공유하는 기능
        </span>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/:id/add"
        >
          content 신 버전 추가 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          일반적으로 새로운 버전을 추가할때 접속한다.
          <br />
          이미지 카드들은 grid(격자) 형태로 정렬되며, 이미지 순서는 (좌 - 우 ,
          상 - 하) 로 높아진다.
          <br />
          페이지 어딘가에 기본적으로 현재 버전보다 patch버전이 1높은 버전값
          (v0.0.9 &gt; v0.0.10)이 나타나 있으며, 해당 값을 클릭시, 원하는
          버전값을 설정할 수 있다. (물론 현재 버전 보다 밑으로 버전 설정하고
          저장하려하면 에러 메세지가 나타남)
          <br />
          이미지를 클릭하면 해당 "자리"에 대응하는 새로운 이미지를 업로드 할 수
          있으며, 일괄 업로드 기능을 구현한다.
          <br />
          (일괄 업로드란, 한번에 여러 이미지를 업로드 하는 것이며, 기존 이미지와
          이름이 같으면, 해당 기존 이미지에 새로운 이미지를 새로운 버전으로
          삼는다)
          <br />
          (만약 일치하는 이미지가 없는 경우, 선택된 순서대로 새로운 이미지로
          등록한다.)
          <br />
          (일괄 업로드 기능을 통해 새로운 이미지 추가하면 될듯하다)
          <br />
          이미지를 드래그 앤 드롭을 통해, 이미지의 순서도 바꿀 수 있다.
          <br />
        </span>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/:id/:version"
        >
          content의 특정 버전 보는 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          기본적으로는 content 보는 페이지와 동일 한데, 좀더 상세한 구현을 위해
          usecase 대한 이야기를 해야할듯
        </span>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          style={{ width: "300px", marginBottom: "20px" }}
          href="/dashboard/content/:id/:version/edit"
        >
          content의 특정 버전 수정 페이지
        </Link>
        :
        <span className="vp" style={{ maxWidth: "800px" }}>
          기본적으로 content의 수정 페이지와 동일 하지만, 버전이 고정되어 있다.
        </span>
      </div>
    </main>
  );
}
