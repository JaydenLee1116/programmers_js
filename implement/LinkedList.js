/*
배열에서 비효율적인 추가, 삭제를 해결하기 위함!
각 요소를 포인터(노드)로 연결하여 관리하는 선형 자료구조
노드는 데이터 영역과 포인터 영역으로 구성된다.
배열과 다르게 동적으로 요소를 추가할 수 있다.
탐색은 O(N)이지만, 추가/제거는 O(1)
Singly Linked List, Doubly Linked List, Circular Linked List가 존재한다.
단일 연결리스트, 이중 연결리스트, 환형 연결리스트
배열은 순차적으로 데이터가 저장되기에 메모리도 연속되게 사용하지만, 연결리스트는 각각 데이터가 차지하는 메모리는 이곳저곳에 퍼져있고 그저 포인터가 연결되어있는 것
즉, 포인터가 가리키는 노드를 바꾸거나 없애거나 하는 식으로 추가/제거를 진행
핵심 로직 : 탐색, 추가, 제거
추가나 제거 로직 작성 시, 추가와 제거를 위한 탐색 로직이 들어가서는 안된다.
*/
