export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'ALVB Quotes API',
    version: '1.0.0',
    description: '견적 관리 API - 견적 신청, 조회, 수정, 삭제',
  },
  servers: [
    {
      url: '/api',
      description: 'API Server',
    },
  ],
  paths: {
    '/quotes': {
      get: {
        summary: '모든 견적 목록 조회',
        tags: ['Quotes'],
        responses: {
          200: {
            description: '성공',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Quote' },
                },
              },
            },
          },
        },
      },
      post: {
        summary: '새 견적 생성',
        tags: ['Quotes'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/QuoteCreate' },
            },
          },
        },
        responses: {
          201: {
            description: '생성됨',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Quote' },
              },
            },
          },
        },
      },
    },
    '/quotes/{id}': {
      get: {
        summary: '특정 견적 조회',
        tags: ['Quotes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: '성공',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Quote' },
              },
            },
          },
          404: { description: '견적을 찾을 수 없음' },
        },
      },
      put: {
        summary: '견적 수정',
        tags: ['Quotes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/QuoteUpdate' },
            },
          },
        },
        responses: {
          200: {
            description: '성공',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Quote' },
              },
            },
          },
          404: { description: '견적을 찾을 수 없음' },
        },
      },
      delete: {
        summary: '견적 삭제',
        tags: ['Quotes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: { description: '삭제 성공' },
          404: { description: '견적을 찾을 수 없음' },
        },
      },
    },
  },
  components: {
    schemas: {
      Quote: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string', example: '홍길동' },
          phone: { type: 'string', example: '010-1234-5678' },
          email: { type: 'string', format: 'email', example: 'hong@example.com' },
          business_type: { type: 'string', example: '카페' },
          project_type: { type: 'string', example: '풀인테리어' },
          area: { type: 'string', example: '30평' },
          budget: { type: 'string', example: '5000만원' },
          location: { type: 'string', example: '서울 강남구' },
          preferred_date: { type: 'string', format: 'date', example: '2024-02-01' },
          preferred_time: { type: 'string', example: '오후 2-4시' },
          message: { type: 'string', example: '인테리어 견적 문의드립니다' },
          created_at: { type: 'string', format: 'date-time' },
          updated_at: { type: 'string', format: 'date-time' },
        },
      },
      QuoteCreate: {
        type: 'object',
        required: ['name', 'business_type', 'project_type', 'area', 'location', 'message'],
        properties: {
          name: { type: 'string', example: '홍길동' },
          phone: { type: 'string', example: '010-1234-5678' },
          email: { type: 'string', format: 'email', example: 'hong@example.com' },
          business_type: { type: 'string', example: '카페' },
          project_type: { type: 'string', example: '풀인테리어' },
          area: { type: 'string', example: '30평' },
          budget: { type: 'string', example: '5000만원' },
          location: { type: 'string', example: '서울 강남구' },
          preferred_date: { type: 'string', format: 'date', example: '2024-02-01' },
          preferred_time: { type: 'string', example: '오후 2-4시' },
          message: { type: 'string', example: '인테리어 견적 문의드립니다' },
        },
      },
      QuoteUpdate: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          phone: { type: 'string' },
          email: { type: 'string', format: 'email' },
          business_type: { type: 'string' },
          project_type: { type: 'string' },
          area: { type: 'string' },
          budget: { type: 'string' },
          location: { type: 'string' },
          preferred_date: { type: 'string', format: 'date' },
          preferred_time: { type: 'string' },
          message: { type: 'string' },
        },
      },
    },
  },
}
