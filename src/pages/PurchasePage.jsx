import Content from "../fragments/Content";
import PurchaseContent from "../fragments/membership/PurchaseContent";
import HomeLayout from "../layouts/HomeLayout";

const MembershipPage = () => {
  return (
    <HomeLayout>
      <Content>
        <PurchaseContent />
      </Content>
    </HomeLayout>
  );
};

export default MembershipPage;
