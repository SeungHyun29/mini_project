/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 토큰 인증 요청하기
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
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
 *                          phone:
 *                              type: string
 *                              example: 유저 전화번호
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 완료하기
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                          phone:
 *                              type: string
 *                              example: "01065808895"
 *                          token:
 *                              type: string
 *                              example: 993842
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          phone:
 *                              type: string
 *                              example: 유저 전화번호
 *                          token:
 *                              type: string
 *                              example: 생성된 토큰 번호
 */

