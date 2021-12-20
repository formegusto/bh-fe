import Assets from "src/assets";
import BasicTemplate from "src/templates/BasicTemplate";

function ConsolePage() {
  return (
    <BasicTemplate
      title="data sharing"
      description="BEMS 공공데이터 구축/공유 서비스 제공 일환으로, 데이터 (예비)사용자들은 수집/저장된 HUMAN 데이터들을 활용하기 위해 데이터 공유서비스를 신청할 수 있습니다. 안전한 데이터 관리를 위해 암호화 된 데이터를 제공받아 사전에 설계된 암호화 프로세스를 적용하여 데이터를 안전하게 활용할 수 있습니다."
      titleImage={Assets.Banner.SubBanner2}
      subTitle="Console"
      subDescription="BBEMS-HDMS Console Service의 간편한 인터페이스를 통해 데이터를 보다 더 쉽게 공유받을 수 있습니다."
    />
  );
}

export default ConsolePage;
