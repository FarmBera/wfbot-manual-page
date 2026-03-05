import {NOTE} from "../ui/CustomElements.tsx";

import React from "react";

/** Image components for manual */
const DocImage: React.FC = () => {
    return <NOTE color='yellow' icon='info' title='안내' text={(<>
        <p>게시글의 생성/수정/삭제 작업은 요청한 순서대로 처리하고 있습니다.</p>
        <p>사용자가 많을 경우 수정사항 반영까지 일정시간 소요될 수 있습니다.</p>
    </>)}/>;
};

export default DocImage;


