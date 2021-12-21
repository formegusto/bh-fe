import Assets from "src/assets";
import styled from "styled-components";
import Card from "../common/Card";
import CardGroup from "../common/CardGroup";

function DocumentComponent() {
  return (
    <Wrap>
      <h2 className="subtitle">Document</h2>
      <h4 className="subdescription">
        BEMS-HDMS API Server의 데이터 무결성을 위한 통신 암호화 처리과정과 API
        사용법을 소개합니다.
      </h4>
      <CardGroup>
        <Card
          className="encdecsystemdesc"
          title="BEMS-HDMS API Encryption-Decryption System"
          description={` BEMS-HDMS API는 API Server로부터 사용자에게 데이터가 전달되는 과정에서 데이터의 무결성을 보장하기 위해서 API 신청 시, API Key와 Decrypt Key라는 2개의 Key를 발급합니다.

 API Key는 Server에서 사용자를 식별하기 위한 용도로 사용됩니다. 사용자는 API 호출 시, header의 authorization에는 발급받은 API Key를 넣어주면 됩니다.
         
 Decrypt Key는 Server에서 API Key를 통해 사용자를 식별한 후, 사용자에게 발급한 Decrypt Key를 이용하여, ARIA Algorithm으로 원본데이터를 암호화하여 응답합니다. 사용자는 응답으로 받은 데이터를 Decrypt Key로 복호화하면 원본데이터를 얻을 수 있습니다.`}
          isBorder
        >
          <EncDecProcess.Wrap>
            <EncDecProcess.Item>
              <EncDecProcess.Title>
                BEMS-HDMS API Encrypt Process
              </EncDecProcess.Title>
              <EncDecProcess.Image
                src={Assets.Etc.EncryptProcess}
                alt="암호화 프로세스"
              />
            </EncDecProcess.Item>
            <EncDecProcess.Item>
              <EncDecProcess.Title>
                BEMS-HDMS API Encrypt Process
              </EncDecProcess.Title>
              <EncDecProcess.Image
                src={Assets.Etc.DecryptProcess}
                alt="복호화 프로세스"
              />
            </EncDecProcess.Item>
          </EncDecProcess.Wrap>
        </Card>
        <CardGroup direction="column">
          <Card
            title="PATH PARAMETER"
            description={` BEMS-HDMS API의 수집데이터 엔티티는 건물, 건물의 호, 센서 순으로 1:N 관계로 구성되어 있습니다. /api/bems-hdms 경로를 시작으로, 건물, 건물의 호, 센서의 아이디를 순차적으로 입력해줄수록, 테이블 간의 관계를 줄 일 수 있으며, 더욱 더 가독성이 높은 데이터를 얻을 수 있습니다.`}
            isBorder
          />
          <Card
            title="QUERY PARAMETER"
            description={` BEMS-HDMS API는 사용자들이 원하는 데이터에 보다 더 쉽게 접근할 수 있도록, 아래와 같은 옵션들을 제공합니다. 모든 옵션들은 센서의 기록정보를 메인으로 하여, 제공데이터를 가공합니다.`}
            isBorder
          />
        </CardGroup>
      </CardGroup>
    </Wrap>
  );
}

const Wrap = styled.div``;

const EncDecProcess = {
  Wrap: styled.div``,
  Item: styled.div`
    margin: 40px 0 0;
  `,
  Title: styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    padding: 16px 10px;
    box-sizing: border-box;
  `,
  Image: styled.img`
    width: 100%;
    object-fit: contain;
  `,
};

export default DocumentComponent;
