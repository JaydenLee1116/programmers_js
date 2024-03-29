/*
해시 테이블 : 키와 값을 받아 키를 해싱(Hashing)하여 나온 index에 값을 저장하는 선형 자료구조
삽입은 O(1)이고 키를 알고 있다면 탐색 및 삭제도 O(1)이 된다.
따로 구현 방법이 있다기보단, 키를 해싱하여 index를 만드는 방법은 정말 여러가지
이 때, 다른 키를 해싱했는데 같은 index가 나오는 것을 Hash collision 이라고 한다.
이를 해결하기 위해
- 선형 탐사법 : 충돌이 발생하면 한칸 옆으로 보낸다.
- 제곱 탐사법 : 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
- 이중 해싱 : 해시 함수를 한 개 더 두어 해싱을 한 번 더 한다.
- 값이 담기는 버킷을 연결리스트로 두어 뒤에 계쏙 붙인다.

해시테이블은 어디에 사용할까?
출석부에서 학생들의 정보를 관리할 때(이름을 통해 탐색, 추가, 삭제가 O(1))

1. 자바스크립트에서의 Object {}가 가장 간단한 해시테이블 구조
2. new Map() 또한 해시테이블 자료구조 -> 객체도 키로 지정 가능(편리하다)
3. new Set()은 중복값이 없게 되는데, 이는 key와 value가 동일한 값으로 들어가는 것이기 때문이다.
*/
