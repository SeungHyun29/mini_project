/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 목록 가져오기
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 유저 이름
 *                          email:
 *                              type: string
 *                              example: 유저 이메일
 *                          personal:
 *                              type: string
 *                              example: 유저 주민번호
 *                          prefer:
 *                              type: string
 *                              example: 유저가 좋아하는 사이트
 *                          pwd:
 *                              type: string
 *                              example: 유저 비밀번호
 *                          phone:
 *                              type: string
 *                              example: 유저 전화번호
 */


/**
 * @swagger
 * /user:
 *   post:
 *     summary: 유저 목록 등록하기
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                          name:
 *                              type: string
 *                              example: 정승현
 *                          email:
 *                              type: string
 *                              example: dmseka08@gmail.com
 *                          personal:
 *                              type: string
 *                              example: "010829-1234567"
 *                          prefer:
 *                              type: string
 *                              example: http://naver.com
 *                          pwd:
 *                              type: string
 *                              example: 1234
 *                          phone:
 *                              type: string
 *                              example: "01065808895"
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 유저 이름
 *                          email:
 *                              type: string
 *                              example: 유저 이메일
 *                          personal:
 *                              type: string
 *                              example: 유저 주민번호
 *                          prefer:
 *                              type: string
 *                              example: 유저가 좋아하는 사이트
 *                          pwd:
 *                              type: string
 *                              example: 유저 비밀번호
 *                          phone:
 *                              type: string
 *                              example: 유저 전화번호
 */
