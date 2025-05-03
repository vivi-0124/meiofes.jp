import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 名桜大学祭",
  description: "名桜大学祭のプライバシーポリシーについてご案内します。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          第32回名桜大学祭実行委員会（以下、「当委員会」）は、当ウェブサイト上で提供するサービス（以下、「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. 個人情報の収集方法</h2>
        <p className="mb-4">
          当委員会は、ユーザーが利用登録をする際に、氏名、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされた情報の交換に関しても、必要に応じて情報を収集する場合があります。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. 個人情報を収集・利用する目的</h2>
        <p className="mb-4">
          当委員会が個人情報を収集・利用する目的は、以下のとおりです。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">当委員会サービスの提供・運営のため</li>
          <li className="mb-2">ユーザーからのお問い合わせに回答するため</li>
          <li className="mb-2">ユーザーに有用な情報を提供するため</li>
          <li className="mb-2">上記の利用目的に付随する目的</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. 個人情報の第三者提供</h2>
        <p className="mb-4">
          当委員会は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">法令に基づく場合</li>
          <li className="mb-2">人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
          <li className="mb-2">公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. 個人情報の開示</h2>
        <p className="mb-4">
          当委員会は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. プライバシーポリシーの変更</h2>
        <p className="mb-4">
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当委員会が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. お問い合わせ窓口</h2>
        <p className="mb-4">
          本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
        </p>
        <p className="mb-4">
          第32回名桜大学祭実行委員会<br />
          住所：〒905-8585 沖縄県名護市字為又1220-1<br />
          メールアドレス：info@meio-festival.com
        </p>

        <p className="mt-8 text-sm text-gray-500">
          制定日：2025年5月4日
        </p>
      </div>
    </div>
  );
} 