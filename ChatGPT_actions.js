openapi: 3.1.0
info:
  title: IELTS Speaking Simulator API
  description: An API to get random IELTS speaking topics for practice.
  version: 1.0.0
servers:
  - url: https://hack-the-hill-ielts-speaking-simulator.hubeiqiao.workers.dev
    description: Production server
paths:
  /:
    get:
      operationId: getRandomTopics
      summary: Get random IELTS speaking topics
      description: |
        Retrieve random topics for IELTS speaking practice. 
        Use the 'part' query parameter to specify which part of the test you want topics for, 
        and the 'num' query parameter to specify the number of topics for part 1.
      parameters:
        - name: part
          in: query
          required: false
          description: The part of the IELTS test (1, 2, or 3). Default is 0 (all parts).
          schema:
            type: integer
        - name: num
          in: query
          required: false
          description: Number of topics for part 1. Ignored for parts 2 and 3. Default is 3.
          schema:
            type: integer
      responses:
        '200':
          description: A plain text response with the selected topics and questions
          content:
            text/plain:
              schema:
                type: string
        '401':
          description: Unauthorized access due to missing or incorrect API key
          content:
            text/plain:
              schema:
                type: string
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: x-api-key
  schemas:
    Topic:
      type: object
      properties:
        number:
          type: string
        questions:
          type: array
          items:
            type: string
    ErrorResponse:
      type: object
      properties:
        message:
          type: string
security:
  - ApiKeyAuth: []
