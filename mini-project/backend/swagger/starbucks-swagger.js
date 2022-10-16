/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 목록 가져오기
 *     tags: [Starbucks]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          img:
 *                              type: string
 *                              example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000056]_20210415135215632.jpg
 *                          name:
 *                              type: string
 *                              example: 민트 블렌드 티
 */

