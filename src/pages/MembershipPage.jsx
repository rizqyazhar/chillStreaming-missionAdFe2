import Content from "../fragments/Content";
import HeroContent from "../fragments/membership/HeroContent";
import PackagesMembership from "../fragments/membership/PackagesMembership";

const MembershipPage = () => {
  return (
    <>
      <Content>
        <HeroContent />
        <PackagesMembership />
      </Content>
    </>
  );
};

export default MembershipPage;
