import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}
export default function Seo({ title }: ISeoProps) {
  // static query 정적 쿼리
  // 저장을 할 떄마다 graphql` 안쪽에 있는 SeoData 로 타입이 자동 생성 된다..!
  // Sea로 하면 SeoQuery라고 타입이 자동생성 된다...
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
